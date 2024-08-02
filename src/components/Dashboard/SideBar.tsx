import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineScoreboard, MdPayment } from "react-icons/md";
import Link from "next/link";
function SideBar() {
  return (
    <>
      <hr />
      <div className="border-r border-white w-[3rem] h-screen flex flex-col items-center gap-3">
        <Link href={"/dashboard"}>
          <IoHomeOutline className="mt-4 text-2xl hover:text-highlight" />
        </Link>
        <Link href={"/dashboard/scoreboard"}>
          <MdOutlineScoreboard className="mt-2 text-2xl hover:text-highlight" />
        </Link>
        <Link href={"/dashboard/payments"}>
          <MdPayment className="mt-2 text-2xl hover:text-highlight" />
        </Link>
      </div>
    </>
  );
}

export default SideBar;
