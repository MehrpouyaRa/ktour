"use client"

import React from 'react'
import useAuth from '../hooks/useAuth'
import AppContainer from '../common/AppContainer'
import Link from 'next/link'
import useAppStore from '@/lib/store/app'

function Header() {
    const { logout } = useAuth()
    const { states: { data } } = useAppStore()

    return data?.user ? (
        <div className='flex justify-center w-full p-4 bg-[var(--color-primary-hover)] text-center text-white'>
            <AppContainer className='flex flex-row justify-between'>
                <div className='flex flex-row justify-between gap-x-10'>
                    <Link href={"/"}><span>خانه</span></Link>
                    <Link href={"/dashboard"}><span>داشبورد</span></Link>
                </div>
                <span onClick={logout} className='cursor-pointer'>خروج</span>
            </AppContainer>
        </div>
    ) : null
}

export default Header