'use client'

import AppCard from '@/component/common/AppCard';
import useAuth from '@/component/hooks/useAuth';
import React from 'react'
import useLoginPage from './hook';
import Field from '@/component/common/ui/Field';
import { Input } from '@/component/common/ui/input';
import AccountIcon from '@iconify-react/line-md/account';
import { Button } from '@/component/common/ui/button';

function LoginPage() {
  const { form: { handleSubmit, formState: { errors }, register } } = useLoginPage()
  const { login, loading } = useAuth()

  return (
    <form onSubmit={handleSubmit(login)}>
      <div className='flex justify-center items-center mt-8 min-h-[70vh]'>
        <AppCard className='flex flex-col gap-y-8'>
          <div className='flex flex-col gap-y-4'>
            <strong className='text-xl text-center md:text-3xl font-extrabold'>ورود به داشبورد</strong>
            <div className="w-[60px] h-[4px] m-auto rounded-full bg-[var(--color-secondary)]"></div>
          </div>
          <div className='flex flex-col mt-4'>
            <Field caption='نام کاربری' Icon={AccountIcon} error={errors?.email?.message || ""}>
              <Input {...register('email', { required: 'نام کاربری را وارد کنید' })} placeholder='نام کاربری' />
            </Field>
          </div>
          <div className='flex flex-col'>
            <Field caption='رمز عبور' Icon={AccountIcon} error={errors?.password?.message || ""}>
              <Input type='password' {...register('password', { required: 'رمز عبور را وارد کنید' })} placeholder='رمز عبور' />
            </Field>
          </div>
          <Button type="submit" isLoading={loading}>ورود</Button>
        </AppCard>
      </div >
    </form >
  );
}

export default LoginPage