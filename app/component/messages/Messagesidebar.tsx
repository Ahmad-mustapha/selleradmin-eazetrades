// src/components/messages/Messagesidebar.tsx
import Image from "next/image";
// Make sure this path is correct relative to this file
import Img from '../../../public/seller.jpg';

interface Messagedata {
    id: number;
    name: string;
    message: string;
    time: string;
    numOfmess: number;
    avatar: string; // Add avatar URL or import
    isActive?: boolean; // Optional: To highlight the active chat
}

// Example Data (use your actual data source)
const messagedata: Messagedata[] = [
    { id: 1, name: 'GAPD DesPro', message: 'Tosin Okeowo: 😁😁😁', time: '17:36', numOfmess: 5, avatar: '/avatars/avatar1.png', isActive: true }, // Example path
    { id: 2, name: 'Generator Man', message: 'Boss, d gen don spoil o!!!', time: '17:36', numOfmess: 3, avatar: '/avatars/avatar2.png' },
    { id: 3, name: 'Love of your life', message: 'Don\'t worry, breakfast is...', time: '17:36', numOfmess: 2, avatar: '/avatars/avatar3.png' },
    { id: 4, name: 'Love of your life', message: 'Don\'t worry, breakfast is...', time: '17:36', numOfmess: 2, avatar: '/avatars/avatar4.png' }, // Different avatar?
    { id: 5, name: 'Bolu Shakur', message: 'Friday turn still dey?', time: '17:36', numOfmess: 0, avatar: '/avatars/avatar5.png' },
    { id: 6, name: 'Jane Neigbour', message: 'You get salt?', time: '17:36', numOfmess: 0, avatar: '/avatars/avatar6.png' },
    { id: 7, name: 'Tuski Morgan', message: 'Done bro', time: '17:36', numOfmess: 1, avatar: '/avatars/avatar7.png' },
    { id: 8, name: 'Tuski Morgan', message: 'Done bro', time: '17:36', numOfmess: 1, avatar: '/avatars/avatar7.png' },
    { id: 9, name: 'Tuski Morgan', message: 'Done bro', time: '17:36', numOfmess: 1, avatar: '/avatars/avatar7.png' },
    { id: 10, name: 'Denrele Shui', message: 'Done bro', time: '17:36', numOfmess: 1, avatar: '/avatars/avatar8.png' },
    // Add more for scrolling if needed
];

const Messagesidebar = () => {
  return (
    // Container: Fixed width, full height (of parent), flex column, background, border, scrolling
    <div className="w-3/5 md:w-2/5 h-full flex flex-col bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
        {/* Optional Header for the message list */}
        <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
            {/* You might want a search bar or title here */}
            <input
                type="text"
                placeholder="Search messages..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
        </div>

        {/* Message List */}
        <ul className="flex flex-col flex-grow p-2 space-y-1"> {/* Use space-y for consistent gap */}
            {messagedata.map((item) =>(
                <li key={item.id}>
                    <a // Use link/button if clickable
                        href="#" // Replace with actual link or onClick handler
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-150 ${
                            item.isActive
                                ? 'bg-indigo-100 bg-opacity-50' // Active chat style
                                : 'hover:bg-gray-100' // Hover style
                        }`}
                    >
                        {/* Avatar */}
                        <div className="flex-shrink-0 w-10 h-10 relative">
                            <Image
                                className="w-full h-full object-cover rounded-full"
                                src={item.avatar || Img} // Use item avatar or default
                                alt={item.name}
                                width={40} height={40}
                            />
                            {/* Online Indicator (Optional) */}
                            {/* <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span> */}
                        </div>

                        {/* Message Info */}
                        <div className="flex-1 min-w-0"> {/* min-w-0 allows truncation */}
                            <p className={`text-sm font-medium ${item.isActive ? 'text-gray-900' : 'text-gray-800'} truncate`}>
                                {item.name}
                            </p>
                            <p className={`text-xs ${item.numOfmess > 0 ? 'text-gray-700 font-medium' : 'text-gray-500'} truncate`}>
                                {item.message}
                            </p>
                        </div>

                        {/* Time and Notification Count */}
                        <div className="flex flex-col items-end text-xs flex-shrink-0 ml-1">
                            <p className="text-gray-400 mb-1">{item.time}</p>
                            {item.numOfmess > 0 && (
                                <span className="bg-[#F9A826] text-white rounded-full py-1 px-2 text-[10px] font-semibold leading-none">
                                    {item.numOfmess}
                                </span>
                            )}
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Messagesidebar;