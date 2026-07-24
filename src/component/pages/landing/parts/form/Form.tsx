"use client"
import React from 'react'
import useLandingForm from './hook'
import AppContainer from '@/component/common/AppContainer'
import { Input } from '@/component/common/ui/input'
import Field from '@/component/common/ui/Field'
import { Textarea } from '@/component/common/ui/textarea'
import { Button } from '@/component/common/ui/button'
import PhoneFilledIcon from '@iconify-react/line-md/phone-filled';
import AccountIcon from '@iconify-react/line-md/account';
import EditIcon from '@iconify-react/line-md/edit';
import PersonAddTwotoneIcon from '@iconify-react/line-md/person-add-twotone';
import BarcodeFillIcon from '@iconify-react/si/barcode-fill';
import PlusIcon from '@iconify-react/line-md/plus';
import MinusIcon from '@iconify-react/line-md/minus';

function LandingForm() {
  const { form: { register, handleSubmit, formState: { errors },watch }, created, Loading, changeNumber } = useLandingForm()

  return (
    <form onSubmit={handleSubmit(created)}>
      <div className='flex justify-center px-6 md:px-0'>
        <AppContainer className='flex flex-col gap-3 md:gap-4'>
          <strong className='text-xl md:text-3xl font-extrabold'>فرم ثبت نام</strong>
          <div className="w-[60px] h-[4px] rounded-full bg-[var(--color-secondary)]"></div>
          <div className="flex flex-col gap-2 md:gap-6 mt-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="w-full md:w-1/2">
                <Field
                  caption='نام و نام خانوادگی'
                  Icon={AccountIcon}
                  error={errors?.name?.message || ""}
                >
                  <Input
                    placeholder='نام خود را وارد کنید'
                    {
                    ...register('name', {
                      required: 'نام را وارد کنید'
                    })}
                  />
                </Field>
              </div>
              <div className="w-full md:w-1/2">
                <Field
                  caption='شماره موبایل'
                  Icon={PhoneFilledIcon}
                  error={errors?.phone?.message || ""}
                >
                  <Input
                    placeholder='0912123456'
                    {
                    ...register('phone', {
                      required: 'شماره موبایل را وارد کنید',
                      pattern: {
                        value: /^((\+98|0)9\d{9})$/,
                        message: 'شماره موبایل خود را صحیح وارد کنید'
                      }
                    })}
                  />
                </Field>
              </div>
            </div>
            <Field caption='کد ملی' Icon={BarcodeFillIcon} error={errors?.national_code?.message || ""}>
              <Input
                placeholder='کد ملی خود را وارد کنید'
                {
                ...register('national_code', {
                  required: 'کد ملی را وارد کنید',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'کد ملی خود را صحیح وارد کنید'
                  }
                })}
              />
            </Field>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6">
              <div className="w-full md:w-1/2 relative">
                <Field caption='تعداد بزرگسال' Icon={PersonAddTwotoneIcon} error={errors?.adults_count?.message || ""}>
                  <Input
                    readOnly
                    {...register('adults_count')}
                  />
                </Field>
                <div className="flex flex-row gap-x-2 absolute left-2 top-[29px] md:top-[42px]">
                  <PlusIcon className='w-12 border-l px-2 pl-4 cursor-pointer' onClick={() => changeNumber({ field: 'adults_count', operate: 'plus' })} />
                  <MinusIcon className='w-12 px-2 cursor-pointer' onClick={() => changeNumber({ field: 'adults_count', operate: 'minus' })} />
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <Field caption='تعداد کودک' Icon={PersonAddTwotoneIcon} error={errors?.children_count?.message || ""}>
                  <Input readOnly {...register('children_count')} placeholder='تعداد کودک' value={!watch('children_count') ? '' : watch('children_count')} />
                </Field>
                <div className="flex flex-row gap-x-2 absolute left-2 top-[29px] md:top-[42px]">
                  <PlusIcon className='w-12 border-l px-2 pl-4 cursor-pointer' onClick={() => changeNumber({ field: 'children_count', operate: 'plus' })} />
                  <MinusIcon className='w-12 px-2 cursor-pointer' onClick={() => changeNumber({ field: 'children_count', operate: 'minus' })} />
                </div>
              </div>
            </div>
            <Field caption='توضیحات' Icon={EditIcon} error={errors?.description?.message || ""}>
              <Textarea {...register('description')} placeholder='توضیحات خود را وارد کنید (اختیاری)' />
            </Field>
            <Button isLoading={Loading} type='submit'>ثبت اطلاعات</Button>
          </div>
        </AppContainer>
      </div>
    </form>
  )
}

export default LandingForm