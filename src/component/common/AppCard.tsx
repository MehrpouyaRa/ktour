import React, { ReactNode } from 'react'

function AppCard({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col bg-white w-[95%] max-w-[400px] p-8 rounded-lg gap-y-4'>
            {children}
        </div>
    )
}

export default AppCard