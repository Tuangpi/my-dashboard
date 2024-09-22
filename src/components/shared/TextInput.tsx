import React from "react";
import {
  forwardRef,
  useEffect,
  useRef,
  RefObject,
  InputHTMLAttributes,
} from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isFocused?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = "text", className = "", isFocused = false, ...props }, ref) => {
    const localRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as RefObject<HTMLInputElement>) || localRef;

    useEffect(() => {
      if (isFocused) {
        inputRef.current?.focus();
      }
    }, [isFocused]);

    return (
      <input
        {...props}
        type={type}
        ref={inputRef}
        className={`w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 font-lato ${className}`}
      />
    );
  }
);

export default TextInput;
