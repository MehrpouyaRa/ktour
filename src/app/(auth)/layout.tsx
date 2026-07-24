import AuthGate from '@/lib/providers/AuthGate'
import { HydrationGate } from '@/lib/providers/HydrationGate'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "ناحیه کاربری",
};

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