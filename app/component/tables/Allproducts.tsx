// src/components/ProductTable.tsx (or your preferred location)
import React from "react";
import Image from "next/image"; // Use Next.js Image component for optimization
// src/data/products.ts (or wherever you prefer)

interface ProductData {
    id: number;
    imageUrl: string;
    name: string;
    category: string;
    price: string; // Using string to easily include currency symbol
    colors: string[]; // Array of hex codes or Tailwind color names
}
  
const sampleProducts: ProductData[] = [
    {
      id: 1,
      imageUrl: "/sellerproduct.jpg'",
      name: "Apple Watch Series 4",
      category: "Digital Product",
      price: "₦3,000",
      colors: ["#1F2937", "#D1D5DB", "#FCA5A5"], // dark-gray, light-gray, light-red
    },
    {
      id: 2,
      imageUrl: "/sellerproduct.jpg'",
      name: "Microsoft Headsquare",
      category: "Digital Product",
      price: "₦34,000",
      colors: ["#1F2937", "#FCA5A5", "#60A5FA", "#FCD34D"],
    },
    {
      id: 3,
      imageUrl: "/sellerproduct.jpg'",
      name: "Women's Dress",
      category: "Fashion",
      price: "₦6,400",
      colors: ["#86198f", "#93C5FD", "#1E3A8A", "#4F46E5"],
    },
    {
      id: 4,
      imageUrl: "/sellerproduct.jpg'",
      name: "Samsung A50",
      category: "Mobile",
      price: "₦4,000",
      colors: ["#1E40AF", "#1F2937", "#991B1B"],
    },
    {
      id: 5,
      imageUrl: "/sellerproduct.jpg'",
      name: "Camera",
      category: "Electronic",
      price: "₦42,000",
      colors: ["#1E40AF", "#1F2937", "#991B1B"],
    },
    {
      id: 6,
      imageUrl: "/sellerproduct.jpg'",
      name: "Microsoft Headsquare", // Duplicate for example
      category: "Digital Product",
      price: "₦43,000",
      colors: ["#1F2937", "#FCA5A5", "#60A5FA", "#FCD34D"],
    },
    {
      id: 7,
      imageUrl: "/sellerproduct.jpg'",
      name: "Women's Dress", // Duplicate for example
      category: "Fashion",
      price: "₦3,000",
      colors: ["#86198f", "#93C5FD", "#1E3A8A", "#4F46E5"],
    },
];
  console.log(sampleProducts);
  
  // Ensure you have placeholder images in your public/images directory
  // or replace the imageUrl paths with valid URLs.
const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
    />
  </svg>
);

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    />
  </svg>
);
// ----------------------------------------------------

const ProductList: React.FC = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-2xl shadow-sm w-full max-w-7xl mx-auto my-8">

      {/* Table Section */}
      <div className="overflow-x-auto"> {/* Makes table horizontally scrollable on small screens */}
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 ">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">
                Image
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Product Name
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Category
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Price
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Available Color
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-center"> {/* Centered Header */}
                Boost Product
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-center"> {/* Centered Header */}
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((product: ProductData) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50/50 align-middle">
                <td className="px-4 py-2">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={40} // Adjust size as needed
                    height={40} // Adjust size as needed
                    className="rounded-md object-cover" // Ensure aspect ratio is handled
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {product.name}
                </td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.price}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-1">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="block w-4 h-4 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }} // Use inline style for arbitrary colors
                        title={color} // Optional: show hex on hover
                      ></span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2 text-center"> {/* Centered Content */}
                  <button className="px-4 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                    Boost
                  </button>
                </td>
                <td className="px-4 py-2 text-center"> {/* Centered Content */}
                  <div className="flex items-center justify-center space-x-2">
                    <button className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition">
                      <EditIcon />
                    </button>
                    <button className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-red-600 hover:border-red-300 hover:bg-red-50 transition">
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;