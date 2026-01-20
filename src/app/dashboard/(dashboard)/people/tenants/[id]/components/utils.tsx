export const getStatusBadge = (status: string) => {
  const statusColors: Record<string, { bg: string; text: string }> = {
    Paid: { bg: "bg-[#e5efea]", text: "text-green-500" },
    Late: { bg: "bg-[#FFF4E6]", text: "text-[#FFA500]" },
    Pending: { bg: "bg-[#E6F1FD]", text: "text-[#007AFF]" },
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





