import Image from "next/image"
import { HiMenuAlt1 } from "react-icons/hi";

 
function Navbar() {
  return (
    <div className="bg-black h-16 flex justify-between items-center px-2 py-1">
      <div className="text-4xl hover:scale-105 transition hover:text-gray-400"><HiMenuAlt1 />

      </div>
      <Image src={"/logo.png"} alt="logo" width={40} height={40}/>
    </div>
     
  )
}

export default Navbar
