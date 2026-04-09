import { CheckCircle2, Circle, Clock, CreditCard, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: string;
  label: string;
  description: string;
  icon: any;
}

const STEPS: Step[] = [
  { id: "funded", label: "Funded", description: "Payment in Escrow", icon: CreditCard },
  { id: "in-progress", label: "In Progress", description: "Artisan at work", icon: Hammer },
  { id: "completed", label: "Completed", description: "Job finished", icon: CheckCircle2 },
  { id: "released", label: "Funds Released", description: "Payment sent", icon: Clock },
];

interface ProgressTimelineProps {
  currentStep: "funded" | "in-progress" | "completed" | "released" | "none";
}

export default function ProgressTimeline({ currentStep }: ProgressTimelineProps) {
  const currentIdx = STEPS.findIndex(s => s.id === currentStep);

  return (
    <div className="w-full py-8">
      <div className="relative flex justify-between">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 h-0.5 w-full bg-neutral-200" />
        <div 
          className="absolute top-5 left-0 h-0.5 bg-blue-600 transition-all duration-500" 
          style={{ width: `${(currentIdx / (STEPS.length - 1)) * 100}%` }}
        />

        {STEPS.map((step, idx) => {
          const isCompleted = idx < currentIdx;
          const isCurrent = idx === currentIdx;
          const isPending = idx > currentIdx;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div 
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-300",
                  isCompleted ? "bg-blue-600 border-blue-600 text-white" : 
                  isCurrent ? "bg-white border-blue-600 text-blue-600 shadow-lg shadow-blue-100" : 
                  "bg-white border-neutral-300 text-neutral-400"
                )}
              >
                {isCompleted ? <CheckCircle2 size={20} /> : <step.icon size={20} />}
              </div>
              <div className="mt-4">
                <p className={cn(
                  "text-sm font-bold",
                  isCurrent ? "text-blue-600" : "text-neutral-900"
                )}>
                  {step.label}
                </p>
                <p className="mt-1 text-[10px] text-neutral-500 uppercase tracking-wider">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
