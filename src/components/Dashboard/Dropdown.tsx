"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
interface DropdownProps {
  className?: string;
  D1Name: string | undefined;
  D2Name: string | undefined;
  D1Items: string[];
  D2Items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  D1Name,
  D2Name,
  D1Items,
  D2Items,
}) => {
  const [D1, setD1] = useState<string>("");
  const [D2, setD2] = useState<string>("");

  const handleD2Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setD2(event.target.value);
    console.log(D2);
  };
  const handleD1Change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setD1(event.target.value);
    console.log(D1);
  };

  return (
    <div className={cn("w-screen flex justify-center", className)}>
      <div className={"flex gap-4 w-full  max-w-96"}>
        <select
          value={D1}
          onChange={handleD1Change}
          className={
            " text-black rounded-sm px-4 py-1 focus:outline-none bg-slate-300 "
          }
        >
          <option className="w-full" value="">
            {D1Name}
          </option>
          {D1Items.map((item, index) => (
            <option className="w-full" value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={D2}
          onChange={handleD2Change}
          className={
            "  text-black rounded-sm px-4 py-1 focus:outline-none bg-slate-300"
          }
        >
          <option className="w-full" value="">
            {D2Name}
          </option>
          {D2Items.map((item, index) => (
            <option className="w-full" value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
