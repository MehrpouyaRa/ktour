import AuthGate from '@/lib/providers/AuthGate'
import { HydrationGate } from '@/lib/providers/HydrationGate'
import React, { ReactNode } from 'react'

function layout({ children }: { children: ReactNode }) {
    return (
        <HydrationGate>
            <AuthGate>
                {children}
            </AuthGate>
        </HydrationGate>
    )
}

export default layout