import StatsOverview from "../../component/dashboardstats/Dashboardstat"
import ProfileVisitsChart from "../../component/dashboardstats/Chart"
import ServicesTable from "../../component/tables/Services"
import ProductsTable from "../../component/tables/Products"
import { CiSearch } from "react-icons/ci"
import { GoBellFill } from "react-icons/go"
import { IoIosArrowDown } from "react-icons/io"
import Image from "next/image"
const Dashboard = () => {
  return (
    <div className="relative">
      <div className="flex md:hidden my-6 md:my-0 items-center gap-2 mr-[310px] md:mr-[300px] ">
        <div className="flex items-center gap-2">
          <CiSearch className="text-[20px]"/>
          <div className="relative flex items-center"><GoBellFill className="text-[20px]"/><span className="absolute">2</span></div>
        </div>
        <div className="flex items-center gap-2">
          <Image 
          width={44}
          height={44}
          className="rounded-full"
          src='/adminprofile.png' alt="" />
          <span className="text-left text-[14px] font-[700]">Shammah <br /> Ray</span>
          <span className="p-1 rounded-full border-[1px] border-black"><IoIosArrowDown className="text-[.8rem]"/></span>
        </div>
      </div>
      <StatsOverview />
      <div className="my-10">
        <ProfileVisitsChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ProductsTable />
        <ServicesTable />
      </div>
    </div>
  )
}

export default Dashboard