"use client";
import React, { useEffect, useRef } from 'react';
import { MaintenanceRequest, MaintenanceStatus } from '@/types/maintenance';
import { MdClose } from 'react-icons/md';
import { FiAlertCircle, FiClock, FiCheckCircle } from 'react-icons/fi';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import useAgentDecideRequest from '@/hooks/maintenance/useAgentDecideRequest';
interface MaintenancePopoverProps {
  isOpen: boolean;
  onClose: () => void;
  requests: MaintenanceRequest[];
  isSuccess: boolean;
  id : string
}

export default function MaintenancePopover({ 
  isOpen, 
  onClose, 
  requests,
  isSuccess,
id
}: MaintenancePopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
const {  handleAcceptRequest,
        handleRejectRequest,
        mutation,
        rejectMutation} = useAgentDecideRequest(id)
  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Add small delay to prevent immediate closing
    setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getStatusIcon = (status: MaintenanceRequest['status']) => {
    switch (status) {
      case 'completed':
        return <FiCheckCircle className="text-green-500" />;
      case 'in-progress':
        return <FiClock className="text-blue-500" />;
      case 'pending':
        return <FiAlertCircle className="text-orange-500" />;
      case 'assigned_pending': 
      return <FiAlertCircle className="text-orange-500" />;
    }
  };

  const getPriorityColor = (priority: MaintenanceRequest['priority']) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div
      ref={popoverRef}
      className="
        fixed bottom-24 right-6 z-[99]
        w-[380px] max-w-[calc(100vw-3rem)]
        max-h-[500px]
        bg-white/95 backdrop-blur-xl
        rounded-2xl shadow-2xl
        border border-gray-200/50
        overflow-hidden
        animate-slide-in
      "
    >
      {/* Header */}
      <div className="
        sticky top-0 z-10
        bg-gradient-to-r from-purple-600 to-indigo-600
        px-5 py-4
        flex items-center justify-between
      ">
        <div>
          <h3 className="text-white font-bold text-lg">
            Maintenance Requests
          </h3>
          <p className="text-purple-100 text-sm">
            {requests?.length} {requests?.length === 1 ? 'item' : 'items'}
          </p>
        </div>
        <button
          onClick={onClose}
          className="
            w-8 h-8 rounded-full
            bg-white/20 hover:bg-white/30
            flex items-center justify-center
            transition-colors
          "
          aria-label="Close"
        >
          <MdClose className="text-white text-xl" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[400px] p-4 space-y-3">
        {(isSuccess && requests?.length === 0) ? (
          <div className="text-center py-12 text-gray-400">
            <FiCheckCircle className="mx-auto text-5xl mb-3 text-gray-300" />
            <p className="font-medium">No maintenance requests</p>
            <p className="text-sm">All clear for this chat!</p>
          </div>
        ) : (

          isSuccess && requests?.map((request : MaintenanceRequest) => (
            <div
              key={request?._id}
              className="
                bg-white rounded-xl
                border border-gray-200
                p-4
                shadow-sm hover:shadow-md
                transition-all duration-200
                hover:scale-[1.02]
                
              "
            >
              {/* Title and Status */}
              <div className="flex items-start gap-3 mb-2">
                <div className="mt-0.5">
                  {getStatusIcon(request?.status)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">
                    {request?.title}
                  </h4>
                  <p className="text-gray-600 text-xs line-clamp-2">
                    {request?.description}
                  </p>
                </div>
              </div>

              {/* Footer: Priority and Date */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                <span className={`
                  px-2.5 py-1 rounded-full
                  text-xs font-medium
                  border
                  ${getPriorityColor(request?.priority)}
                `}>
                  {request?.priority?.toUpperCase()}
                </span>

             
                <div className="text-xs mx-auto text-gray-500">
                  {formatDate(request?.createdAt)}
                </div>

                   <div className="ms-auto flex gap-3 items-center">
                  <FaCheckCircle className={`text-green-600 ${(mutation.isPending || rejectMutation.isPending) ? "opacity-30 pointer-events-none" : "opacity-100"} text-xl cursor-pointer`} onClick={() =>handleAcceptRequest(request?._id)} />
<MdCancel className={`text-red-600 text-2xl ${(rejectMutation.isPending || mutation.isPending) ? "opacity-30 pointer-events-none" : "opacity-100"}  cursor-pointer`} onClick={() =>handleRejectRequest(request?._id)}/>
                  </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
