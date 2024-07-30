"use client";

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
        className={`bg-highlight text-xl text-white py-2 hover:bg-${hover}-500 hover:text-${hovertext} hover:scale-105 transition px-5 active:scale-95   rounded-md ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
