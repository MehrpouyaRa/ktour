import clsx from 'clsx'
import React, { HTMLAttributes, ReactNode } from 'react'

function AppContainer({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx("w-[95%] max-w-[1100px]", props.className)}>{children}</div>
  )
}

export default AppContainer