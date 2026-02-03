import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "PENDING" | "APPROVED" | "REJECTED";
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-xs font-semibold border shadow-sm inline-flex items-center gap-1.5",
      status === "APPROVED" && "bg-green-50 text-green-700 border-green-200",
      status === "PENDING" && "bg-yellow-50 text-yellow-700 border-yellow-200",
      status === "REJECTED" && "bg-red-50 text-red-700 border-red-200",
    )}>
      <span className={cn(
        "w-1.5 h-1.5 rounded-full",
        status === "APPROVED" && "bg-green-500",
        status === "PENDING" && "bg-yellow-500",
        status === "REJECTED" && "bg-red-500",
      )} />
      {status}
    </span>
  );
}
