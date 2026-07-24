import React, { HTMLAttributes, ReactNode } from 'react'

function AppCard({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className='flex flex-col border bg-white w-[90%] max-w-[400px] p-12 rounded-lg gap-y-4'>
            {children}
        </div>
    )
}

export default AppCard