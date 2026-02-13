import React from "react";
import { PiFolderOpen } from "react-icons/pi";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  message?: string;
  className?: string | undefined;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function EmptyState({ 
  message = "No data available", 
  className,
  icon: Icon = PiFolderOpen
}: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center bg-gray-50/50 rounded-xl border border-dashed border-gray-200", className)}>
      <Icon className="text-4xl text-gray-300 mb-3" />
      <p className="text-gray-500 text-sm font-medium">{message}</p>
    </div>
  );
}
