"use client";
import React from 'react';
import { MdConstruction } from 'react-icons/md';

interface MaintenanceNotificationIconProps {
  count: number;
  onClick: () => void;
  isOpen: boolean;
}

export default function MaintenanceNotificationIcon({ 
  count, 
  onClick, 
  isOpen 
}: MaintenanceNotificationIconProps) {
  const hasPendingRequests = count > 0;

  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-4 right-4 z-[100]
        w-10 h-10 rounded-full
        bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700
        shadow-lg hover:shadow-xl
        flex items-center justify-center
        transition-all duration-300 ease-out
        hover:scale-110 active:scale-95
        backdrop-blur-md bg-opacity-95
        border border-white/20
        ${hasPendingRequests && !isOpen ? 'animate-gentle-pulse' : ''}
        ${isOpen ? 'ring-4 ring-purple-400/50 scale-105' : ''}
      `}
      aria-label={`${count} maintenance request${count !== 1 ? 's' : ''}`}
    >
      {/* Icon */}
      <MdConstruction className="text-white text-2xl" />
      
      {/* Badge Count */}
      {count > 0 && (
        <div className="
          absolute -top-1 -right-1
          w-6 h-6 rounded-full
          bg-gradient-to-br from-red-500 to-pink-600
          border-2 border-white
          flex items-center justify-center
          text-white text-xs font-bold
          shadow-md
          animate-fade-in
        ">
          {count > 9 ? '9+' : count}
        </div>
      )}
      
      {/* Glow effect when active */}
      {hasPendingRequests && (
        <div className="
          absolute inset-0 rounded-full
          bg-purple-500/30 blur-xl
          animate-gentle-pulse
          -z-10
        " />
      )}
    </button>
  );
}
