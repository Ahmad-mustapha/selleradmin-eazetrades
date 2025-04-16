"use client"

import { useState } from "react";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import Messagesidebar from "../../component/messages/Messagesidebar";
import Img from '../../../public/seller.jpg'
import Image from "next/image";


const Messagemenu = () => {
  return (
    <div className="flex flex-col gap-4 text-[#4F4F4F] absolute right-0 top-20 p-4 rounded-lg bg-white">
        <div className="flex items-center gap-2 text-[20px] font-[500]"><FaRegStar /><Link href=''>View vendor profile</Link></div>
        <div className="flex items-center gap-2 text-[20px] font-[500]"><FaRegStar /><button>Delete conversation</button></div>
    </div>
  )
}





const Message = () => {
  const [messageMenu, setMessageMenu] = useState(false)

  const handleMessageMenu = () =>(
    setMessageMenu(!messageMenu)
  )

  return (
    <div>
      <Messagesidebar />
      <div className='px-4 w-4/5 ml-72 bg-[#F9F7FF] text-[#333]'>
        <header className="flex items-center justify-between relative border-b pb-4">
          <div className="flex items-center gap-6">
            <div className="bg-slate-300 rounded-full w-[60px] h-[60px] md:w-[100px] md:h-[100px]"><Image className="w-full h-full object-cover rounded-full" src={Img} alt="" /></div>
            <div>
              <p className="md:text-[30px]">Name of Seller</p>
              <p className="text-[20px] text-[#979797]">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <FaRegStar className="text-[30px]"/>
            <button>
              <TbDotsVertical 
              onClick={handleMessageMenu}
              className="text-[30px]"/>
            </button>
          </div>
          {messageMenu && (
            <Messagemenu />
          )}
        </header>
        <main className="mt-20">
          <div className="flex items-end justify-end gap-2">
            <p className="w-3/6 bg-[#5F3AFB] text-[#fff] p-4 rounded-l-xl rounded-tr-xl">Hi Shammah. I want to buy the purple speaker that I saw on your website profile but I have a couple of questions: How long has the speaker been, the life span and all???</p>
            <div className="bg-slate-300 rounded-full w-[40px] h-[40px]"><Image className="w-full h-full object-cover rounded-full" src={Img} alt="bbb" /></div>
          </div>
          <div className="flex items-end justify-start gap-2 mt-10">
            <p className="w-3/6 bg-[#fff] p-4 rounded-l-xl rounded-tr-xl">Hi Shammah. I want to buy the purple speaker that I saw on your website profile but I have a couple of questions: How long has the speaker been, the life span and all???</p>
            <div className="bg-slate-300 rounded-full w-[40px] h-[40px]"><Image className="w-full h-full object-cover rounded-full" src={Img} alt="bbb" /></div>
          </div>

          <form action="">
            <div className="flex items-center justify-between gap-4 mt-18 p-5 md:p-7 bg-[#EFEBFF] border-[2px] border-[#D9D9D9]">
              <div className="flex items-center gap-4">
              <button><AiOutlinePlusCircle className="text-[20px] xl:text-[22px]"/></button>
              <button><MdOutlineEmojiEmotions className="text-[20px] xl:text-[22px]"/></button>
              </div>
              <div className="w-full relative">
                <input 
                className="w-full rounded-[100px] p-2 px-10 bg-[#fff]"
                type="text" />
                <button><IoMdMic className="text-[22px] absolute right-2 top-2"/></button>
                <button><RxLetterCaseCapitalize className="text-[22px] absolute left-2 top-2"/></button>
              </div>
              <div>
                <button className="bg-[#5F3AFB] p-2 rounded-full flex items-center justify-between"><FiSend className="text-[38px] text-white"/></button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Message