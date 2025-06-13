'use client'

import AppCard from '@/component/common/AppCard';
import useAuth from '@/component/hooks/useAuth';
import React from 'react'
import useLoginPage from './hook';
import AppButton from '@/component/common/card/AppButton';

function LoginPage() {
  const { form: { handleSubmit, formState: { errors }, register } } = useLoginPage()
  const { login, isPending } = useAuth()

  return (
    <form onSubmit={handleSubmit(login)}>
      <div className='flex justify-center items-center mt-8'>
        <AppCard>
          <input
            type="text"
            placeholder='Phone number'
            className="border p-2"
            {
            ...register('number', {
              required: 'Phone number is required',
              pattern: {
                value: /^((\+98|0)9\d{9})$/,
                message: 'Please enter a valid Iranian phone number'
              }
            })}
          />
          {errors.number?.message ? <span className='text-sm text-red-800'>{errors.number.message}</span> : null}
          <AppButton type="submit" loading={isPending}>Login</AppButton>
        </AppCard>
      </div>
    </form>
  );
}

export default LoginPage