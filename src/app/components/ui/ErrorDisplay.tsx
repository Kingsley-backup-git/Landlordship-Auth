import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { cn } from "@/lib/utils";

interface ErrorDisplayProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

const ErrorDisplay = ({ message = "Something went wrong", onRetry, className }: ErrorDisplayProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-4 text-center h-full", className)}>
      <BiErrorCircle className="text-red-500 text-4xl mb-2" />
      <p className="text-gray-600 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay;
