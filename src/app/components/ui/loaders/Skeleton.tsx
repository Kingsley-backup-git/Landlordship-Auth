import React from "react";
import { cn } from "@/lib/utils"; // Assuming utils exists, otherwise I'll need to check or use clsx directly

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  variant?: "text" | "circular" | "rectangular";
  className?: string;
}

const Skeleton = ({
  width,
  height,
  variant = "text",
  className,
  ...props
}: SkeletonProps) => {
  const style = {
    width: width,
    height: height,
  };

  return (
    <div
      className={cn(
        "bg-gray-200 animate-pulse",
        variant === "text" && "rounded-md",
        variant === "circular" && "rounded-full",
        variant === "rectangular" && "rounded-md",
        className
      )}
      style={style}
      {...props}
    />
  );
};

export default Skeleton;
