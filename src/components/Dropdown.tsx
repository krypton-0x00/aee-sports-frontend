"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
interface DropdownProps {
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ className }) => {
  const [season, setSeason] = useState<string>("");
  const [day, setDay] = useState<string>("");

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value);
    console.log(day);
  };
  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSeason(event.target.value);
    console.log(season);
  };

  return (
    <div className={cn("w-screen flex justify-center", className)}>
      <div className={"flex justify-between w-full px-12 max-w-96"}>
        <select
          value={season}
          onChange={handleSeasonChange}
          className={
            " text-black rounded-sm px-4 py-1 focus:outline-none bg-slate-300 "
          }
        >
          <option value="">Season</option>
          <option value="s40">S-40</option>
          <option value="s41">S-41</option>
          <option value="s42">S-42</option>
        </select>

        <select
          value={day}
          onChange={handleDayChange}
          className={
            "  text-black rounded-sm px-4 py-1 focus:outline-none bg-slate-300"
          }
        >
          <option value="">Day</option>
          <option value="1">1</option>
          <option value="3">2</option>
          <option value="2">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <button className="border hover:bg-orange-400 active:scale-95 active:bg-highlight rounded-sm px-4 py-1 focus:outline-none bg-highlight border-highlight  text-white ">
          Get{" "}
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
