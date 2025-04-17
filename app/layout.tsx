import { Sidebar, Header } from './component/import' 
import '../globals.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className="overflow-x-hidden bg-[#F9F7FF] h-screen w-full">
        <div className="hidden h-0 lg:h-screen lg:block border-r-[1px] border-[#ddd] fixed top-0 left-0 bottom-0 lg:w-[300px] bg-white">
          <Sidebar />
        </div>
        <main  className="w-full ml-0 lg:ml-[300px] rounded-lg mx-10 my-24 lg:m-24 border-l-[1px] h-0 border-black">
          <Header />
          <div className="w-full flex justify-center flex-col items-center ml-6 pt-6 sm:ml-0 mx-auto px-2 sm:px-6 flex-1">{children}</div>
        </main>
      </body>
    </html>
  )
}

export default Layout