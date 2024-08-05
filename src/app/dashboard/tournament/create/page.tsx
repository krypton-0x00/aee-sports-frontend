import Button from "@/components/CustomButton";
import Dropdown from "@/components/Dashboard/Dropdown";
import React from "react";

function page() {
  return (
    <form className="flex flex-col items-center justify-center m-auto gap-4 text-black placeholder:text-slate-500 ">
      <div className="py-8">
        <div className="relative w-36 h-36">
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <span className="text-gray-500">Upload</span>
          </div>

          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col w-64 gap-4">
        <input
          className="px-2 py-2 rounded-md w-full"
          type="text"
          placeholder="Tournament Name"
        />
        <div className="flex gap-4 ">
          <input
            className="px-2 py-2 rounded-md w-full"
            type="number"
            placeholder="Slots"
          />
          <input
            className="px-2 py-2 rounded-md w-full"
            type="number"
            placeholder="Duration"
          />
        </div>
        <div className="">
          <Dropdown
            D1Name="Visibility"
            D2Name="Mode"
            D1Items={["HIDDEN", "VISIBILITY"]}
            D2Items={["SOLO", "DUO", "SQUAD"]}
          />
        </div>
      </div>
      <Button text="Create" />
    </form>
  );
}

export default page;
