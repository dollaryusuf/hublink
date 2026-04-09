import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-trust text-trust-foreground shadow-lg shadow-trust/20 hover:bg-trust/90 active:scale-95 transition-all",
        outline:
          "border-neutral-200 bg-white hover:bg-neutral-50 hover:text-trust aria-expanded:bg-neutral-50 aria-expanded:text-trust",
        secondary:
          "bg-neutral-100 text-trust hover:bg-neutral-100/80 aria-expanded:bg-neutral-100 aria-expanded:text-trust",
        ghost:
          "hover:bg-neutral-100 hover:text-trust aria-expanded:bg-neutral-100 aria-expanded:text-trust",
        destructive:
          "bg-red-500/10 text-red-600 hover:bg-red-500/20 focus-visible:border-red-500/40 focus-visible:ring-red-500/20",
        link: "text-trust underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 gap-2 px-6 rounded-xl",
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs",
        sm: "h-9 gap-1.5 rounded-xl px-4 text-sm",
        lg: "h-14 gap-2 px-10 rounded-2xl text-lg",
        icon: "size-10 rounded-xl",
        "icon-xs":
          "size-7 rounded-lg",
        "icon-sm":
          "size-9 rounded-xl",
        "icon-lg": "size-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
