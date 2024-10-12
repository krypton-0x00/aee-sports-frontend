import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import axios from "axios";
import { SERVER_URI } from "@/constants";
import { useRouter } from "next/navigation";

const ProfileIcon = ({ text }: { text: string }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${SERVER_URI}auth/logout`,
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("user");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <div className="text-white rounded-full bg-slate-700 w-8 h-8 flex items-center justify-center">
          {text}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 p-2 rounded-md border border-white">
        <DropdownMenuLabel className="text-zinc-400 font-semibold">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer active:outline:none hover:bg-orange-500 p-1 rounded-sm hover:text-black">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer active:outline:none hover:bg-orange-500 p-1 rounded-sm   hover:text-black">
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer active:outline:none hover:bg-orange-500 p-1 rounded-sm hover:text-black"
          onClick={handleLogout}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileIcon;
