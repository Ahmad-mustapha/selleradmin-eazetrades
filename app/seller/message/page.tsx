// src/app/admin/messages/page.tsx (Example route)
"use client"; // Needed because child components use client hooks


import Messagesidebar from "../../component/messages/Messagesidebar";
import ChatWindow from "../../component/messages/Chatwindow";


const MessagesPage = () => {
  // This component acts as the container within the AdminLayout's <main> tag.
  // The parent <main> in AdminLayout already has flex and flex-1.
  // This div uses flex to arrange its children side-by-side.
  return (
    // Use w-full and h-full to take up all space given by the parent <main>
    <div className="flex w-full h-screen">
      <Messagesidebar />
      <ChatWindow />
    </div>
  );
};

export default MessagesPage;
