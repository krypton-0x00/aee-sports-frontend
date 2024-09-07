"use client";

import { cn } from "@/lib/utils";
import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  hover?: string;
  hovertext?: string;
  type: "submit" | "reset" | "button";
}

function Button({
  text,
  className,
  type,
  hover,
  hovertext,
}: ButtonProps): ReactElement {
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
