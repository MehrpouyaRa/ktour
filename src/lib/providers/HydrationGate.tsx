'use client'

import useAppStore from '@/lib/store/app';
import React, { useEffect } from 'react';

export const HydrationGate = ({ children }: { children?: React.ReactNode }) => {
    const { states: { hasHydrated }, actions: { update_hydrated } } = useAppStore()

    useEffect(() => {
        if (!hasHydrated) update_hydrated(true)
    }, [hasHydrated])

    return hasHydrated ? children : null
};
