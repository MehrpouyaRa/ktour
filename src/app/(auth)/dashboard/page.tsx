'use client'

import AppButton from '@/component/common/card/AppButton'
import AppCard from '@/component/common/AppCard'
import React from 'react'
import useAuth from '@/component/hooks/useAuth'

function Page() {
  const { logout } = useAuth()

  return (
    <div className='flex text-center justify-center mt-8'>
      <AppCard>
        <div className="flex flex-col gap-y-8">
          <span className='font-semibold'>Welcome to the Dashboard</span>
          <AppButton onClick={logout}>Logout</AppButton>
        </div>
      </AppCard>
    </div>
  )
}

export default Page