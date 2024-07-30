"use client";

interface ButtonProps {
  text: string;
  className?: string;
}

function Button({ text, className }: ButtonProps) {
  return (
    <div>
      <button
        className={`bg-highlight text-xl text-white py-2 hover:bg-orange-500 hover:scale-105 transition px-5 active:scale-95  rounded-md ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
