import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import clsx from "clsx"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={clsx("border-none bg-none w-full outline-none", className)}
      {...props}
    />
  )
}

export { Input }
