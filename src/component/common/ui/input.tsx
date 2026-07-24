import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

function Input({ className, type, ...props }:  React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className="border-none bg-none w-full outline-none"
      {...props}
    />
  )
}

export { Input }
