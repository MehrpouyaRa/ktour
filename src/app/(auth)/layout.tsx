import AuthGate from '@/lib/providers/AuthGate'
import { HydrationGate } from '@/lib/providers/HydrationGate'
import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
    return (
        <HydrationGate>
            <AuthGate>
                <div className="flex flex-col w-full gap-8 mt-4">
                    {children}
                </div>
            </AuthGate>
        </HydrationGate>
    )
}

export default layout