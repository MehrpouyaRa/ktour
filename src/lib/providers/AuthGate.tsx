'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useAppStore from '../store/app';

export const AuthGate = ({ children }: { children: React.ReactNode }) => {
    const { states: { data } } = useAppStore()
    const [permission, setPermission] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setPermission(Boolean(data))
        if (!data) router.push('/')
    }, [data])

    return permission ? children : null
};

export default AuthGate