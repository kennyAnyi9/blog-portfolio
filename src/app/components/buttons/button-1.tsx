import React, { MouseEvent } from "react";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isPrimary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  isPrimary = false,
}) => {
  const buttonClass = isPrimary
    ? "bg-gray-900 text-white"
    : "text-gray-900 hover:text-white hover:bg-gray-900";

  return (
    <button
      onClick={onClick}
      className={`relative w-4/5 md:w-1/4 px-5 py-3 text-sm rounded-xl ring-1 ring-gray-800 mt-5 leading-none flex items-center justify-center ${buttonClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
