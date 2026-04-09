import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerifiedBadgeProps {
  className?: string;
  showText?: boolean;
}

export default function VerifiedBadge({ className, showText = true }: VerifiedBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-1.5 rounded-full bg-trust/5 px-2.5 py-1 text-trust ring-1 ring-inset ring-trust/10", className)}>
      <ShieldCheck className="h-4 w-4 text-blue-600" />
      {showText && <span className="text-[10px] font-extrabold uppercase tracking-widest">NIN Verified</span>}
    </div>
  );
}
