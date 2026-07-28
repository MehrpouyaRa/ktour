"use client"
import useLandingForm from './hook'
import AppContainer from '@/component/common/AppContainer'
import { Input } from '@/component/common/ui/input'
import Field from '@/component/common/ui/Field'
import { Textarea } from '@/component/common/ui/textarea'
import { Button } from '@/component/common/ui/button'
import PhoneFilledIcon from '@iconify-react/line-md/phone-filled';
import AccountIcon from '@iconify-react/line-md/account';
import EditIcon from '@iconify-react/line-md/edit';
import BarcodeFillIcon from '@iconify-react/si/barcode-fill';
import FieldTitle from '@/component/common/ui/FieldTitle'
import CalendarIcon from '@iconify-react/line-md/calendar';
import MedicalServicesIcon from '@iconify-react/line-md/medical-services';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/component/common/ui/select'
import { Controller } from 'react-hook-form'
import ChildDialog from './Dialog'
import Datepicker from '@/component/common/Datepicker'
import DialogSuccess from './DialogSuccess'

function LandingForm() {
  const { form, genderItems, created, Loading, dialog, dialogSucess } = useLandingForm()
  const { register, handleSubmit, formState: { errors }, control, watch } = form

  return (
    <>
      <form onSubmit={handleSubmit(created)}>
        <div className='flex justify-center px-6 md:px-0'>
          <AppContainer className='flex flex-col gap-3 md:gap-4'>
            <strong className='text-xl md:text-3xl font-extrabold'>فرم ثبت نام</strong>
            <div className="w-[60px] h-[4px] rounded-full bg-[var(--color-secondary)]"></div>
            <div className="flex flex-col gap-4 md:gap-6 mt-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
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
                  <Field caption='کد ملی' Icon={BarcodeFillIcon} error={errors?.national_code?.message || ""}>
                    <Input
                      placeholder='کد ملی خود را وارد کنید'
                      {
                      ...register('national_code', {
                        required: 'کد ملی را وارد کنید',
                        setValueAs: (value) => value.replace(/[۰-۹]/g, (d: string) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))).trim(),
                        pattern: {
                          value: /^\d{10}$/,
                          message: 'کد ملی خود را صحیح وارد کنید'
                        }
                      })}
                    />
                  </Field>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="w-full md:w-1/2">
                  <Field
                    caption='جنسیت'
                    Icon={AccountIcon}
                    error={errors?.gender?.message || ""}
                  >
                    <Controller
                      control={control}
                      name="gender"
                      rules={{
                        required: "جنسیت را وارد کنید"
                      }}
                      render={({ field }) => (
                        <Select
                          items={genderItems}
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full max-w-48">
                            <SelectValue placeholder="--انتخاب کنید" />
                          </SelectTrigger>
                          <SelectContent>
                            {genderItems.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </Field>
                </div>
                <div className="w-full md:w-1/2">
                  <Field
                    caption='تاریخ تولد'
                    Icon={CalendarIcon}
                    error={errors?.birth_date?.message || ""}
                  >
                    <Controller
                      name="birth_date"
                      control={control}
                      rules={{
                        required: "تاریخ تولد را وارد کنید",
                      }}
                      render={({ field }) => (
                        <Datepicker value={field.value} onChange={field.onChange} />
                      )}
                    />
                  </Field>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
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
                        setValueAs: (value) => value.replace(/[۰-۹]/g, (d: string) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))).trim(),
                        pattern: {
                          value: /^((\+98|0)9\d{9})$/,
                          message: 'شماره موبایل خود را صحیح وارد کنید'
                        }
                      })}
                    />
                  </Field>
                </div>
                <div className="w-full md:w-1/2">
                  <Field
                    caption='شماره تماس اضطراری (بستگان)'
                    Icon={PhoneFilledIcon}
                    error={errors?.phone_emergency?.message || ""}
                  >
                    <Input
                      placeholder='0912123456'
                      {
                      ...register('phone_emergency', {
                        required: 'شماره تماس اضطراری را وارد کنید',
                        setValueAs: (value) => value.replace(/[۰-۹]/g, (d: string) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))).trim(),
                        pattern: {
                          value: /^((\+98|0)9\d{9})$/,
                          message: 'شماره تماس را صحیح وارد کنید'
                        }
                      })}
                    />
                  </Field>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <FieldTitle caption='فرزندان همراه' />
                <div className="flex flex-row gap-2 md:gap-6">
                  <ChildDialog
                    open={dialog.value}
                    triggerOpen={dialog.setTrue}
                    triggerClose={dialog.setFalse}
                    useFormRegister={form}
                    value={watch("children")}
                  />
                </div>
              </div>
              <Field caption='سابقه بیماری' Icon={MedicalServicesIcon} error={errors?.medical_history?.message || ''}>
                <Input
                  placeholder='سابقه بیماری خود را وارد کنید (اختیاری)'
                  {
                  ...register('medical_history')}
                />
              </Field>
              <Field caption='توضیحات' Icon={EditIcon} error={errors?.description?.message || ""}>
                <Textarea {...register('description')} placeholder='توضیحات خود را وارد کنید (اختیاری)' />
              </Field>
              <Button isLoading={Loading} type='submit'>ثبت اطلاعات</Button>
            </div>
          </AppContainer>
        </div>
      </form>
      <DialogSuccess open={dialogSucess.value} triggerClose={dialogSucess.setFalse} />
    </>
  )
}

export default LandingForm