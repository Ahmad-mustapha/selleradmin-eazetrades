// src/components/messages/ChatWindow.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa"; // Added FaStar for filled star
import { TbDotsVertical } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import Img from '../../../public/seller.jpg' // Adjust path
// import UserAvatar from '../../../public/user_avatar.png'; // Example path for user's avatar

// Messagemenu component (Dropdown for chat options)
const Messagemenu = () => {
  return (
    <div className="flex flex-col absolute right-4 top-16 w-56 p-3 rounded-lg bg-white shadow-xl border border-gray-100 z-20">
        <Link href='#' className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
            <FaRegStar size={16} /> View vendor profile
        </Link>
        <button className="flex items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md">
            {/* Consider a trash icon instead */}
            <FaRegStar size={16} /> Delete conversation
        </button>
    </div>
  )
}

// Example Message Structure
interface ChatMessage {
    id: number;
    sender: 'me' | 'other';
    text: string;
    avatar: string; // Path to avatar image
    timestamp?: string; // Optional timestamp
}

const ChatWindow = () => {
  const [messageMenu, setMessageMenu] = useState(false);
  const [isStarred, setIsStarred] = useState(false); // Example state for star button
  const [message, setMessage] = useState(''); // State for input field

  const handleMessageMenu = () => setMessageMenu(!messageMenu);
  const toggleStar = () => setIsStarred(!isStarred);

  // Dummy message data for styling - Replace with your actual data fetching
  const messages: ChatMessage[] = [
    { id: 1, sender: 'me', text: 'Hi Shammah. I want to buy the purple speaker that I saw on your website profile but I have a couple of questions: 1. How long has the speaker been, the life span and all???', avatar: '/public/seller.jpg' },
    { id: 2, sender: 'other', text: 'Hi Shammah. I want to buy the purple speaker that I saw on your website profile but I have a couple of questions: 1. How long has the speaker been, the life span and all???', avatar: '/public/seller.jpg' },
    { id: 3, sender: 'me', text: 'Okay, sounds good. Can I place the order now?', avatar: '/public/seller.jpg' },
    { id: 4, sender: 'other', text: 'Yes, absolutely! Please proceed.', avatar: '/public/seller.jpg' },
    { id: 5, sender: 'me', text: 'Great, thanks!', avatar: '/public/seller.jpg' },
    // Add more messages to test scrolling
    { id: 6, sender: 'other', text: 'Let me know if you need anything else.', avatar: '/public/seller.jpg' },
    { id: 7, sender: 'me', text: 'Will do!', avatar: '/public/seller.jpg' },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') return;
    console.log("Sending message:", message);
    // Add logic to actually send the message (update state, call API, etc.)
    setMessage(''); // Clear input after sending
  };

  return (
    // Main container for the chat window, takes remaining space (flex-1)
    // Uses flex-col to stack header, messages, footer. h-full ensures it fills height.
    <div className="flex flex-col h-full bg-[#F9F7FF] w-full lg:flex-1 flex-1/2">

        {/* Chat Header */}
        <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white relative flex-shrink-0">
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 relative">
                    <Image className="w-full h-full object-cover rounded-full" src={Img} alt="Seller Avatar" width={48} height={48} />
                    {/* Online status indicator */}
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
                </div>
                <div>
                    <p className="text-sm md:text-base font-semibold text-gray-800">Name of Seller</p>
                    <p className="text-xs text-green-500">Online</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleStar}
                    className={`text-gray-400 hover:text-yellow-500 transition-colors ${isStarred ? 'text-yellow-500' : ''}`}
                    aria-label={isStarred ? 'Unstar conversation' : 'Star conversation'}
                >
                    {isStarred ? <FaStar size={20}/> : <FaRegStar size={20}/>}
                </button>
                <button
                    onClick={handleMessageMenu}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="More options"
                >
                    <TbDotsVertical size={22}/>
                </button>
            </div>
            {/* Conditionally render the dropdown menu */}
            {messageMenu && <Messagemenu />}
        </header>

        {/* Message List Area - Takes available space (flex-1) and scrolls */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-2.5 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    {/* Avatar for 'other' sender (appears on the left) */}
                    {msg.sender === 'other' && (
                       <div className="flex-shrink-0 w-8 h-8 self-end mb-1"> {/* Align avatar with bottom of text */}
                          <Image className="w-full h-full object-cover rounded-full" src={msg.avatar} alt="Sender Avatar" width={32} height={32} />
                       </div>
                    )}

                    {/* Message Bubble */}
                    <div className={`max-w-[70%] md:max-w-[65%] p-3 rounded-xl text-sm leading-relaxed ${
                        msg.sender === 'me'
                          ? 'bg-[#5F3AFB] text-white rounded-br-none' // My messages: Purple, white text, bottom-right corner sharp
                          : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100' // Other's messages: White, dark text, bottom-left corner sharp
                      }`}>
                      {msg.text}
                    </div>

                     {/* Avatar for 'me' sender (appears on the right) */}
                    {msg.sender === 'me' && (
                      <div className="flex-shrink-0 w-8 h-8 self-end mb-1"> {/* Align avatar with bottom of text */}
                        <Image className="w-full h-full object-cover rounded-full" src={msg.avatar} alt="My Avatar" width={32} height={32}/>
                      </div>
                    )}
                </div>
            ))}
        </main>

        {/* Chat Input Area - Stays at the bottom (flex-shrink-0) */}
        <footer className="p-4 px-8 bg-[#EFEBFF] border-t border-[#D9D9D9]">
            <form onSubmit={handleSend} className="flex items-center gap-3">
                {/* Attachment Button */}
                <button type="button" className="text-gray-500 hover:text-indigo-600 p-1">
                    <AiOutlinePlusCircle size={24}/>
                </button>
                {/* Emoji Button */}
                <button type="button" className="text-gray-500 hover:text-indigo-600 p-1">
                    <MdOutlineEmojiEmotions size={24}/>
                </button>

                {/* Input field container */}
                <div className="flex-1 relative">
                    {/* Text Formatting Icon (Optional/Placeholder) */}
                    {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                         <RxLetterCaseCapitalize size={20}/>
                    </span> */}
                    <input
                        className="w-full rounded-full py-2.5 pl-4 pr-10 bg-white border border-gray-300 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-300 focus:outline-none text-sm placeholder-gray-500"
                        type="text"
                        placeholder="Type a message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {/* Mic Button (Optional) */}
                    <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600">
                        <IoMdMic size={20}/>
                    </button>
                </div>

                {/* Send Button */}
                <button
                    type="submit"
                    className="bg-[#5F3AFB] hover:bg-indigo-700 text-white p-[9px] rounded-full flex-shrink-0 transition-colors disabled:opacity-50"
                    disabled={message.trim() === ''} // Disable if input is empty
                    aria-label="Send message"
                >
                    <FiSend size={22}/> {/* Slightly larger icon */}
                </button>
            </form>
        </footer>
    </div>
  );
};

export default ChatWindow;