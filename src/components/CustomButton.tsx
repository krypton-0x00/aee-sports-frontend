"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  hover?: string;
  hovertext?: string;
  type: ButtonHTMLAttributes<string>;
}

function Button({ text, className, type, hover, hovertext }: ButtonProps) {
  return (
    <div>
      <button
        type={type}
        className={cn(
          `bg-highlight text-xl text-white py-2   hover:scale-105 transition px-5 active:scale-95   rounded-md `,
          className
        )}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
