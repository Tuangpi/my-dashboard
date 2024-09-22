import { ReactNode } from "react";

interface InputLabelProps {
  htmlFor: string;
  label?: string;
  className?: string;
  children?: ReactNode;
}

const InputLabel = ({
  htmlFor,
  label,
  className = "",
  children,
}: InputLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-base font-semibold text-gray-700 font-lato ${className}`}
    >
      {label}
      {children}
    </label>
  );
};

export default InputLabel;
