export const getStatusBadge = (status: string) => {
  const statusColors: Record<string, { bg: string; text: string }> = {
    pending: { bg: "bg-[#FFF4E6]", text: "text-[#FFA500]" },
    accepted: { bg: "bg-[#E6F1FD]", text: "text-[#007AFF]" },
    assigned: { bg: "bg-[#E6F1FD]", text: "text-[#007AFF]" },
     assigned_pending: { bg: "bg-[#E6F1FD]", text: "text-[#007AFF]" },
    completed: { bg: "bg-[#e5efea]", text: "text-green-600" },
    Approved: { bg: "bg-[#e5efea]", text: "text-green-500" },
    rejected: { bg: "bg-[#FFE5E5]", text: "text-red-600" },
    Paid: { bg: "bg-[#e5efea]", text: "text-green-500" },
    Late: { bg: "bg-[#FFF4E6]", text: "text-[#FFA500]" },
    Completed: { bg: "bg-[#e5efea]", text: "text-green-500" },
    success: { bg: "bg-[#e5efea]", text: "text-green-500" },
    "In Progress": { bg: "bg-[#E6F1FD]", text: "text-[#007AFF]" },
    Failed: { bg: "bg-[#FFE5E5]", text: "text-red-600" },
    active: { bg: "bg-[#e5efea]", text: "text-green-500" },
  };

  const colors = statusColors[status] || {
    bg: "bg-[#F5F5F5]",
    text: "text-[#00000066]",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-lg text-xs font-[400] ${colors.bg} ${colors.text}`}
    >
      {status}
    </span>
  );
};





