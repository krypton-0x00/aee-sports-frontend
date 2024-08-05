"use client";
import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Drawer } from "antd";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCreate } from "react-icons/md";
import { TbTournament } from "react-icons/tb";
import { FaDoorOpen } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const MuiSideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <button onClick={showDrawer} className="bg-black p-2 mx-2 text-3xl ">
        <RxHamburgerMenu />
      </button>
      <Drawer
        onClose={onClose}
        open={open}
        placement={"left"}
        width={200}
        // autoFocus={false}
        // mask={false}
        style={{ backgroundColor: "#0c1010" }}
        className="text-textColor"
      >
        <div className="flex flex-col gap-5">
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
      </Drawer>
    </>
  );
};

export default MuiSideBar;