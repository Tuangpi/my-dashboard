import { ReactNode } from "react";

interface PrimaryButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}

const PrimaryButton = ({
  type = "button",
  className = "",
  onClick,
  children,
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 font-lato ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
