"use client";
import React, { useEffect, useMemo, useState } from "react";
import FirstSection from "./detailsSection/firstSection";
import SecondSection from "./detailsSection/secondSection";
import ThirdSection from "./detailsSection/thirdSection";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Button from "@/app/components/ui/Button";
import { MaintenanceService } from "@/services/maintenance";
import AssignAgentModal from "./AssignAgentModal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Details({ openHandler, getReqMutation }: { openHandler: (val: boolean) => void; getReqMutation: any }) {
  const request = getReqMutation?.data;
  const requestId: string | undefined = request?._id;

  const [status, setStatus] = useState<string | undefined>(request?.status);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [assignedAgent, setAssignedAgent] = useState<any>(request?.assignedAgent ?? null);
  const [isAssignOpen, setIsAssignOpen] = useState(false);

  useEffect(() => {
    setStatus(request?.status);
    setAssignedAgent(request?.assignedAgent ?? null);
  }, [request?.status, request?.assignedAgent]);

  const isClosed = status === "rejected" || status === "completed";
  const isAccepted = status === "accepted";
  const isAssigned = status === "assigned";

  const acceptMutation = useMutation({
    mutationFn: async () => {
      if (!requestId) throw new Error("Missing request id");
      return await new MaintenanceService().acceptRequestStatus(requestId);
    },
    onMutate: () => {
      toast.loading("Accepting request...", { toastId: "accept-req" });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      toast.dismiss("accept-req");
      toast.success("Request accepted", { autoClose: 3000 });
      setStatus(data?.status ?? data?.data?.status ?? "accepted");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.dismiss("accept-req");
      toast.error(error?.message ?? "Failed to accept request");
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async () => {
      if (!requestId) throw new Error("Missing request id");
      return await new MaintenanceService().rejectRequestStatus(requestId);
    },
    onMutate: () => {
      toast.loading("Rejecting request...", { toastId: "reject-req" });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSuccess: (data: any) => {
      toast.dismiss("reject-req");
      toast.success("Request rejected", { autoClose: 3000 });
      setStatus(data?.status ?? data?.data?.status ?? "rejected");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.dismiss("reject-req");
      toast.error(error?.message ?? "Failed to reject request");
    },
  });

  const isProcessing = acceptMutation.isPending || rejectMutation.isPending;

  const assignedDisplay = useMemo(() => {
    if (!assignedAgent) return null;
    const name =
      assignedAgent?.name ||
      assignedAgent?.userName ||
      [assignedAgent?.firstName, assignedAgent?.lastName].filter(Boolean).join(" ");
    const email = assignedAgent?.email;
    return { name: name || "Assigned agent", email: email || "" };
  }, [assignedAgent]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h1
          className="text-black font-semibold text-sm cursor-pointer"
          onClick={() => openHandler(false)}
        >
          Back
        </h1>

        <div className="flex items-center gap-3">
          {/* Pending: Accept / Reject */}
          {status === "pending" && (
            <>
              <Button
                type="button"
                disabled={isProcessing}
                onClick={() => rejectMutation.mutateAsync()}
                classname={`${
                  isProcessing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-[#F9F9FA]"
                } border border-[#0000001A] text-black text-xs font-[400] rounded-xl py-2 px-4 transition-colors`}
                text="Reject"
              />
              <Button
                type="button"
                disabled={isProcessing}
                onClick={() => acceptMutation.mutateAsync()}
                classname={`${
                  isProcessing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1D3639] hover:bg-[#1D3639]/90"
                } text-white text-xs font-[400] rounded-xl py-2 px-4 transition-colors`}
                text="Accept"
              />
            </>
          )}

          {/* Accepted: Assign Agent */}
          {isAccepted && !assignedAgent && (
            <Button
              type="button"
              disabled={false}
              onClick={() => setIsAssignOpen(true)}
              classname="bg-black text-white text-xs font-[400] rounded-xl py-2 px-4 hover:bg-black/90 transition-colors"
              text="Assign Agent"
            />
          )}

          {/* Closed message */}
          {isClosed && (
            <span className="text-xs font-[400] text-[#00000066] bg-[#F9F9FA] border border-[#0000001A] px-3 py-2 rounded-xl">
              This request is closed — no further actions are available.
            </span>
          )}
        </div>
      </div>

      <FirstSection data={{ ...request, status, assignedAgent }} />

      <SecondSection data={{ ...request, status, assignedAgent }} />

      <ThirdSection data={{ ...request, status, assignedAgent }} />

      {/* Assigned agent summary */}
      {assignedDisplay && (
        <div className="bg-[#F9F9FA] p-6 rounded-2xl mt-6 border border-[#0000000A]">
          <h2 className="text-sm font-semibold text-black">Assigned Agent</h2>
          <p className="text-sm font-[400] text-black mt-2">
            {assignedDisplay.name}
          </p>
          {assignedDisplay.email ? (
            <p className="text-xs font-[400] text-[#00000066] mt-1 break-all">
              {assignedDisplay.email}
            </p>
          ) : null}
          {isAssigned ? (
            <p className="text-xs font-[400] text-[#00000066] mt-3">
              This request has been assigned and is now in progress.
            </p>
          ) : null}
        </div>
      )}

      <AssignAgentModal 
        isOpen={isAssignOpen}
        requestId = {requestId as string}
        onClose={() => setIsAssignOpen(false)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onAssigned={(agent: any) => {
          setAssignedAgent(agent);
          setStatus("assigned");
        }}
      />
    </div>
  );
}
