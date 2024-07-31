"use client";

import { cn } from "@/lib/utils";

interface ButtonProps {
  text: string;
  className?: string;
  hover?: string;
  hovertext?: string;
}

function Button({ text, className, hover, hovertext }: ButtonProps) {
  return (
    <div>
      <button
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
