import { cn } from "@/lib/utils"
import * as React from "react"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn("border-none bg-none w-full outline-none min-h-28", className)}
      {...props}
    />
  )
}

export { Textarea }
