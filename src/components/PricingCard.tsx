"use client"
import React from "react";
import { BorderBeam } from "./ui/BorderBeam";
import Link from "next/link";

interface PricingCardProps {
  plan: string;
  price: number;
  discription: string;
  points: string[];
}

function PricingCard({ plan, price, discription, points }: PricingCardProps) {
  return (
    <div className="relative shadow-sm shadow-white  rounded-lg flex flex-col gap-3 items-start px-5 py-5 w-64">
      <BorderBeam duration={5} borderWidth={3} />

      <h1 className=" px-3 py-1 rounded-md ">{plan}</h1>

      <h1 className="text-3xl font-bold">{`₹${price}/week`}</h1>
      <p>{discription}</p>
      <ul>
        {points.map((point, index) => (
          <li className="text-gray-400 px-6" key={index}>
            {point}
          </li>
        ))}
      </ul>

      <Link href={"/register"}>
        <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white font-normal rounded  p-[2px]">
          <span className="flex w-full bg-black text-white rounded p-1">
            Register Now
          </span>
        </button>
      </Link>
    </div>
  );
}

export default PricingCard;
