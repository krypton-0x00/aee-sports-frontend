import { IoHomeOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoGraph } from "react-icons/go";

function Navbar() {
  return (
    <div className="bg-black h-16 flex items-center justify-center ">
      <div className="text-3xl  flex  justify-between items-center px-4 py-2 gap-8 ">
        <div className="hover:text-highlight transition active:text-white">
          <IoHomeOutline />
        </div>
        <div className="hover:text-highlight transition active:text-white">
          <IoGameControllerOutline />
        </div>
        <div className="hover:text-highlight transition active:text-white">
          <MdOutlineShoppingCart />
        </div>
        <div className="hover:text-highlight transition active:text-white">
          <GoGraph />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
