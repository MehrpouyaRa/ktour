import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

function Field({ children, caption, Icon, error }: { children: ReactNode, Icon: React.ElementType, caption: string, error: string }) {
    return (
        <div className='flex flex-col gap-1 md:gap-2'>
            <strong className='text-sm md:text-md md:mr-4'>{caption}</strong>
            <div className='flex flex-col'>
                <div className={cn(
                    "flex flex-row w-full rounded-xl border overflow-hidden p-1 md:p-2",
                    "bg-[var(--color-surface)]",
                    "text-[15px] text-[var(--color-text)]",
                    "placeholder:text-[var(--color-text-secondary)]",
                    "transition-all duration-200 outline-none",
                    "focus:border-[var(--color-primary)]",
                    "focus:ring-4 focus:ring-[color:var(--color-primary)]/10",
                    "disabled:bg-gray-100 disabled:opacity-60 items-start",
                    "border-[var(--color-border)]",
                )}>
                    <div className={cn(
                        "w-[32px] h-[32px] md:w-[40px] md:h-[40px] shrink-0 bg-gray-200 rounded-full flex items-center justify-center",
                        "border-gray-200"
                    )}><Icon className={cn("w-[18px] md:w-[26px]", "text-gray-500")} /></div>
                    <div className="px-4 w-full mt-1.5 md:mt-2.5">{children}</div>
                </div>
            </div>
            {error ? <span className='text-sm text-red-500'>{error}</span> : null}
        </div>
    )
}

export default Field