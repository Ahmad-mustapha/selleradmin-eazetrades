import Image from "next/image"

import Img from '../../../public/seller.jpg'


interface Messagedata {
    id: number
    name: string
    message: string
    time: string
    numOfmess: number
}


const messagedata: Messagedata[] = [
    { id: 1, name: 'Ahmad Mustapha', message: 'Boss, How you dey na?', time: '17:35', numOfmess: 2},
    { id:21, name: 'Ahmad Mustapha', message: 'Boss, How you dey na?', time: '17:35', numOfmess: 2},
    { id: 3, name: 'Ahmad Mustapha', message: 'Boss, How you dey na?', time: '17:35', numOfmess: 2},
    { id: 4, name: 'Ahmad Mustapha', message: 'Boss, How you dey na?', time: '17:35', numOfmess: 2},
    { id: 5, name: 'Ahmad Mustapha', message: 'Boss, How you dey na?', time: '17:35', numOfmess: 2},
]


const Messagesidebar = () => {
  return (
    <div className="bg-white shadow-md p-4 pt-8 w-1/5 h-screen fixed top-[5rem] left-72 ml-3 overflow-y-auto">
        <ul className="flex flex-col gap-4">
            {
                messagedata.map((item, index) =>(
                    <li 
                    className="flex items-center justify-between gap-2"
                    key={index}>
                        <div className="bg-slate-300 rounded-full w-[40px] h-[40px]"><Image className="w-full h-full object-cover rounded-full" src={Img} alt="bbb" /></div>
                       <div className="flex flex-col text-[15px] text-[#505050]">
                            <p>{item.name}</p>
                            <p>{item.message}</p>
                       </div>
                       <div className="flex flex-col items-center justify-center text-[14px]">
                            <p className="text-[#929191]">{item.time}</p>
                            <p className="bg-[#EF811F] text-white rounded-full px-[6px] text-[12px]">{item.numOfmess}</p>
                       </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Messagesidebar