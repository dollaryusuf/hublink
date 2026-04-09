import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-base transition-all outline-none placeholder:text-neutral-400 focus:border-trust focus:ring-4 focus:ring-trust/5 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-4 aria-invalid:ring-red-500/10 md:text-sm shadow-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
