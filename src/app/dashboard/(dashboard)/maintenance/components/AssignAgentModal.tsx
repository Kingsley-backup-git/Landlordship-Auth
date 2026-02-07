"use client";

import React, { useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";
import Button from "@/app/components/ui/Button";
import { AgentService } from "@/services/agent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDisplayName(agent: any) {
  return (
    agent?.name ||
    agent?.userName ||
    [agent?.firstName, agent?.lastName].filter(Boolean).join(" ") ||
    "Agent"
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAvailability(agent: any) {
  const a = agent?.availability;
  if (a === "available" || a === "busy" || a === "unavailable") return a;
  return undefined;
}

function AvailabilityPill({ value }: { value?: string }) {
  const styles: Record<string, string> = {
    available: "bg-emerald-100 text-emerald-800 border-emerald-200",
    busy: "bg-amber-100 text-amber-800 border-amber-200",
    unavailable: "bg-slate-100 text-slate-600 border-slate-200",
  };
  if (!value) return null;
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-lg text-[11px] font-[400] border ${
        styles[value] ?? "bg-[#F5F5F5] text-[#00000066] border-[#0000001A]"
      }`}
    >
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </span>
  );
}

export default function AssignAgentModal({
  requestId,
  isOpen,
  onClose,
  onAssigned,
}: {
  requestId : string;
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onAssigned: (agent: any) => void;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const agentsQuery = useQuery({
    queryKey: ["agents"],
    queryFn: async () => await new AgentService().getAgent(),
    enabled: isOpen,
  });

  const agents = useMemo(() => {
    const d = agentsQuery.data;
    if (Array.isArray(d)) return d;
    if (Array.isArray(d?.data)) return d.data;
    if (Array.isArray(d?.agents)) return d.agents;
    return [];
  }, [agentsQuery.data]);

  const selectedAgent = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => agents.find((a: any) => String(a?._id ?? a?.id) === String(selectedId)),
    [agents, selectedId],
  );

  const assignMutation = useMutation({
    mutationFn: async (values : {requestId:string, agentId:string}) => {
      return await new AgentService().assignAgent(values);
    },
    onMutate: () => {
      toast.loading("Assigning agent...", { toastId: "assign-agent" });
    },
    onSuccess: () => {
      toast.dismiss("assign-agent");
      toast.success("Agent assigned successfully", { autoClose: 3000 });
      if (selectedAgent) onAssigned(selectedAgent);
      onClose();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.dismiss("assign-agent");
      toast.error(error?.message ?? "Failed to assign agent");
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-[9999999] bg-white/10 backdrop-blur-[1px] px-4 py-6">
      <div className="max-w-[640px] w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-lg border-[.5px] border-[#0000001A]">
        <div className="p-6 sticky top-0 bg-white border-b border-[#0000000A]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-black font-semibold text-lg">Assign Agent</h1>
              <p className="text-[#00000066] text-sm font-[400] mt-1">
                Select an agent and assign this maintenance request.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="bg-[#0000000A] cursor-pointer text-black text-xl p-2 rounded-lg hover:bg-[#0000001A] transition-colors"
              aria-label="Close"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>

        <div className="p-6">
          {agentsQuery.isPending ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#F9F9FA] border border-[#0000000A] rounded-2xl p-4 animate-pulse"
                >
                  <div className="h-4 w-40 bg-[#F5F5F5] rounded-lg" />
                  <div className="h-3 w-64 bg-[#F5F5F5] rounded-lg mt-2" />
                </div>
              ))}
            </div>
          ) : agentsQuery.isError ? (
            <div className="bg-white border border-[#0000000A] rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl mb-3">⚠️</div>
              <h2 className="text-lg font-semibold text-black mb-2">
                Failed to load agents
              </h2>
              <p className="text-[#00000066] font-[400] text-sm mb-6">
                Please try again.
              </p>
              <button
                onClick={() => agentsQuery.refetch()}
                className="px-6 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-all duration-300 text-sm font-[400]"
              >
                Retry
              </button>
            </div>
          ) : agents.length < 1 ? (
            <div className="bg-[#F9F9FA] border border-[#0000000A] rounded-2xl p-8 text-center">
              <div className="text-4xl mb-2">🧑‍🔧</div>
              <h2 className="text-lg font-semibold text-black">
                No agents available at the moment
              </h2>
          
             
            </div>
          ) : (
            <div className="space-y-3">
            
              {agents.map((agent: any) => {
                const id = String(agent?._id ?? agent?.id);
                const isSelected = String(selectedId) === id;
                const availability = getAvailability(agent);
                return (
                  <button
                    type="button"
                    key={id}
                    onClick={() => setSelectedId(id)}
                    disabled={assignMutation.isPending}
                    className={`w-full text-left bg-[#F9F9FA] rounded-2xl p-4 border transition-colors ${
                      isSelected
                        ? "border-black"
                        : "border-[#0000000A] hover:border-[#0000001A]"
                    } ${assignMutation.isPending ? "opacity-70" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-black font-semibold text-sm truncate">
                          {getDisplayName(agent)}
                        </p>
                        <p className="text-[#00000066] font-[400] text-xs mt-1 break-all">
                          {agent?.email || "—"}
                        </p>
                      </div>
                      <AvailabilityPill value={availability} />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-[#0000000A] flex justify-end gap-3">
          <Button
            type="button"
            disabled={assignMutation.isPending}
            onClick={onClose}
            classname="bg-transparent border-[.5px] border-[#0000001A] text-sm text-black font-[400] rounded-xl py-2.5 px-4 hover:bg-[#F9F9FA] transition-colors"
            text="Cancel"
          />
          <Button
            type="button"
            disabled={assignMutation.isPending}
            onClick={() => selectedId && assignMutation.mutateAsync({requestId, agentId:selectedId})}
            classname={`${
              !selectedId || assignMutation.isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#1D3639] hover:bg-[#1D3639]/90"
            } text-white text-sm font-[400] rounded-xl py-2.5 px-4 transition-colors`}
            text="Assign"
          />
        </div>
      </div>
    </div>
  );
}

