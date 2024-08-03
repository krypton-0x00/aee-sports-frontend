import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCreate } from "react-icons/md";
import Link from "next/link";
import { TbTournament } from "react-icons/tb";
import { FaDoorOpen } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
function SideBar() {
  return (
    <>
      <hr className="border-white" />
      <div className="border-r border-white h-screen flex flex-col gap-5">
        <Link
          href={"/dashboard"}
          className="flex items-center mx-2 mt-4 gap-2 hover:text-highlight"
        >
          <IoHomeOutline className=" text-2xl hover:text-highlight" />
          <div>Home</div>
        </Link>
        <Link
          className="flex items-center mx-2  mt-2 gap-2 hover:text-highlight"
          href={"/dashboard/create"}
        >
          <MdOutlineCreate className=" text-2xl hover:text-highlight" />
          Create
        </Link>
        <Link
          className="flex items-center mx-2 mt-2 gap-2 hover:text-highlight"
          href={"/dashboard/tournament"}
        >
          <TbTournament className=" text-2xl hover:text-highlight" />
          Tournaments
        </Link>
        <Link
          className="flex items-center mx-2 mt-2 gap-2 hover:text-highlight"
          href={"/dashboard/tournament/ongoing"}
        >
          <FaDoorOpen className=" text-2xl hover:text-highlight" />
          Ongoing <br /> tournaments
        </Link>
        <Link
          className="flex items-center mx-2 mt-2 gap-2 hover:text-highlight"
          href={"/dashboard/settings"}
        >
          <CiSettings className="text-2xl hover:text-highlight" />
          Settings
        </Link>
      </div>
    </>
  );
}

export default SideBar;
