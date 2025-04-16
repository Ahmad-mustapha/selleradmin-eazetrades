'use client'; // Needed for useState, useEffect, useRef

import React, { useState, useEffect, useRef } from 'react'; // Import hooks
import Image from 'next/image';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import StatusBadge from './Status'; // Assuming Status.tsx is correct

// Define the structure for a service item
interface ServiceItem {
  id: string;
  imageUrl: string;
  name: string;
  status: 'In Stock' | 'Reorder';
  price: string;
}

// Sample data directly in the component or imported
const serviceData: ServiceItem[] = [
   { id: '001', imageUrl: '/sellerproduct.jpg', name: 'Apparel', status: 'In Stock', price: '₦3,000' },
   { id: '002', imageUrl: '/sellerproduct.jpg', name: 'Apparel', status: 'Reorder', price: '₦1,000' },
   { id: '003', imageUrl: '/sellerproduct.jpg', name: 'Electronics', status: 'In Stock', price: '₦5,000' },
   { id: '004', imageUrl: '/sellerproduct.jpg', name: 'Electronics', status: 'In Stock', price: '₦5,000' },
   { id: '005', imageUrl: '/sellerproduct.jpg', name: 'Electronics', status: 'Reorder', price: '₦2,000' },
];

const ServicesTable: React.FC = () => {
  // State to track the ID of the item whose dropdown is open
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown div

  // --- Placeholder Action Handlers ---
  const handleEdit = (itemId: string) => {
    console.log("Edit item:", itemId);
    setOpenDropdownId(null); // Close dropdown after action
    // Add your edit logic here (e.g., open modal, navigate to edit page)
  };

  const handleDelete = (itemId: string) => {
    console.log("Delete item:", itemId);
    setOpenDropdownId(null); // Close dropdown after action
    // Add your delete logic here (e.g., show confirmation, call API)
  };

  // --- Toggle Dropdown ---
  const toggleDropdown = (itemId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering click outside listener
    setOpenDropdownId(openDropdownId === itemId ? null : itemId);
  };

  // --- Click Outside Handler ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If dropdown is open and the click is outside the dropdown element
      if (openDropdownId !== null && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null); // Close the dropdown
      }
    };

    // Add listener only when a dropdown is open
    if (openDropdownId !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup: remove listener when component unmounts or dropdown closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownId]); // Dependency array ensures effect runs when openDropdownId changes

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100 w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Services</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-500 uppercase bg-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Item ID</th>
              <th scope="col" className="px-4 py-3 font-medium">Image</th>
              <th scope="col" className="px-4 py-3 font-medium">Customers&apos; Name</th>
              <th scope="col" className="px-4 py-3 font-medium">Reorder Status</th>
              <th scope="col" className="px-4 py-3 font-medium">Unit Price</th>
              <th scope="col" className="px-4 py-3 font-medium"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {serviceData.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b border-gray-100 hover:bg-gray-50 align-middle"
              >
                {/* Item ID */}
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                  {item.id}
                </td>
                {/* Image */}
                <td className="px-4 py-3">
                  <div className="w-16 h-10 relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      onError={(e) => { e.currentTarget.src = '/placeholder.png'; }} // Basic fallback
                    />
                  </div>
                </td>
                {/* Name */}
                <td className="px-4 py-3">
                  {item.name}
                </td>
                {/* Status */}
                <td className="px-4 py-3">
                  <StatusBadge status={item.status} />
                </td>
                {/* Price */}
                <td className="px-4 py-3 font-medium text-gray-900">
                  {item.price}
                </td>
                {/* Actions Cell - Make it relative */}
                <td className="px-4 py-3 text-right relative">
                  <button
                    onClick={(e) => toggleDropdown(item.id, e)} // Call toggle function
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" // Added focus styles
                  >
                    <HiOutlineEllipsisVertical className="w-5 h-5" />
                  </button>

                  {/* --- Conditionally Rendered Dropdown --- */}
                  {openDropdownId === item.id && (
                    <div
                      ref={dropdownRef} // Attach ref here
                      className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg border border-gray-200 z-20 py-1" // Adjusted width, added z-index, padding
                    >
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="block w-full text-left px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="block w-full text-left px-3 py-1 text-sm text-red-600 hover:bg-red-50" // Danger color
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  {/* --- End Dropdown --- */}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServicesTable;