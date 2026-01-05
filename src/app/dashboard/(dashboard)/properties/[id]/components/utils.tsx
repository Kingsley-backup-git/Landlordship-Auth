export const getStatusBadge = (status: string) => {
  const statusColors: Record<string, { bg: string; text: string }> = {
    Pending: { bg: "bg-[#FFF4E6]", text: "text-[#FFA500]" },
    Approved: { bg: "bg-[#e5efea]", text: "text-green-500" },
    Rejected: { bg: "bg-[#FFE5E5]", text: "text-red-600" },
    Paid: { bg: "bg-[#e5efea]", text: "text-green-500" },
    Late: { bg: "bg-[#FFF4E6]", text: "text-[#FFA500]" },
    Completed: { bg: "bg-[#e5efea]", text: "text-green-500" },
    "In Progress": { bg: "bg-[#E6F1FD]", text: "text-[#007AFF]" },
    Failed: { bg: "bg-[#FFE5E5]", text: "text-red-600" },
    Active: { bg: "bg-[#e5efea]", text: "text-green-500" },
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


