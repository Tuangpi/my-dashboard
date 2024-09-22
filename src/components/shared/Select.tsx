import React, { FC, ReactNode, ForwardedRef, forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { children, className = "", ...props },
    ref: ForwardedRef<HTMLSelectElement>
  ) => {
    return (
      <select
        className={`w-full px-4 py-[9.3px] mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-lato ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);

export default Select;
