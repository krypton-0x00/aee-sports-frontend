import { IoHomeOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-black h-16 flex items-center justify-center ">
      <div className="text-3xl  flex  justify-between items-center px-4 py-2 gap-8 ">
        <Link href="/">
          <div className="hover:text-highlight transition active:text-white">
            <IoHomeOutline />
          </div>
        </Link>

        <Link href="/gaming">
          <div className="hover:text-highlight transition active:text-white">
            <IoGameControllerOutline />
          </div>
        </Link>

        <Link href="/tournaments">
          <div className="hover:text-highlight transition active:text-white">
            <MdOutlineShoppingCart />
          </div>
        </Link>

        <Link href="/leaderboard">
          <div className="hover:text-highlight transition active:text-white">
            <GoGraph />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
