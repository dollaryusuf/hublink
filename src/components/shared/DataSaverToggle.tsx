import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function DataSaverToggle() {
  const [isDataSaver, setIsDataSaver] = useState(() => {
    const saved = localStorage.getItem("dataSaver");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("dataSaver", String(isDataSaver));
    if (isDataSaver) {
      document.documentElement.classList.add("data-saver");
    } else {
      document.documentElement.classList.remove("data-saver");
    }
  }, [isDataSaver]);

  const handleToggle = (checked: boolean) => {
    setIsDataSaver(checked);
    toast.success(checked ? "Data Saver Enabled" : "Data Saver Disabled", {
      description: checked ? "Images optimized for 3G/4G networks." : "High-quality images will be loaded."
    });
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-4 py-2 ring-1 ring-neutral-200 transition-all hover:ring-neutral-300 shadow-sm">
      <Zap size={14} className={isDataSaver ? "text-amber-500 fill-amber-500" : "text-neutral-400"} />
      <Label htmlFor="data-saver" className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500 cursor-pointer select-none">
        Data Saver
      </Label>
      <Switch 
        id="data-saver" 
        checked={isDataSaver} 
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-amber-500"
      />
    </div>
  );
}
