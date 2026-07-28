"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/component/common/dialog'
import { Button } from '@/component/common/ui/button'
import Field from '@/component/common/ui/Field';
import PlusIcon from '@iconify-react/line-md/plus';
import { Controller, useForm, UseFormReturn } from 'react-hook-form';
import AccountIcon from '@iconify-react/line-md/account';
import { Input } from '@/component/common/ui/input';
import CalendarIcon from '@iconify-react/line-md/calendar';
import Datepicker from '@/component/common/Datepicker';
import BarcodeFillIcon from '@iconify-react/si/barcode-fill';
import { IBook } from "@/lib/types/booking";
import { useState } from 'react';
import { IBookForm } from './hook';
import { childRegisterHelper } from './helper';
import useToast from '@/component/hooks/useToast';

interface IDialog {
    open: boolean
    value: IBook["children"]
    triggerOpen(): void
    triggerClose(): void
    useFormRegister: UseFormReturn<IBookForm, any, IBookForm>
}

function ChildDialog({ open, triggerClose, triggerOpen, value, useFormRegister }: IDialog) {
    const [index, setIndex] = useState<number>(0)
    const formChild = useForm<IBook["children"][0]>()
    const { register, formState: { errors }, control, handleSubmit, reset, setValue } = formChild
    const { notify } = useToast()

    function add(data: IBook["children"][0]) {
        const { hasDuplicateCode, isValidAge } = childRegisterHelper
        try {

            if (!isValidAge(data.birth_date)) throw Error("تاریخ تولد صحیح نمیباشد")
            if (hasDuplicateCode(useFormRegister.getValues("children"), data.national_code)) throw Error("کد ملی تکراری میباشد")
            const { setValue, getValues } = useFormRegister
            setValue("children", [...getValues("children"), data]);
            closeModal()
        } catch (error: any) {
            notify({ message: error?.message ?? "", status: "error" })
        }
    }

    function UpdateMode(data: IBook["children"][0], index: number) {
        setIndex(index)
        setValue('name', data.name)
        setValue('birth_date', data.birth_date)
        setValue('national_code', data.national_code)
        triggerOpen()
    }

    function openModal() {
        reset()
        setIndex(0)
        triggerOpen()
    }

    function closeModal() {
        reset()
        setIndex(0)
        triggerClose()
    }

    function updateChild() {
        const { setValue, getValues } = useFormRegister
        setValue("children", getValues('children').map((el, key) => (key === (index - 1)) ? formChild.getValues() : el));
        closeModal()
    }

    function deleteChild() {
        const { setValue, getValues } = useFormRegister
        setValue("children", getValues('children').filter((_, key) => key != (index - 1)).map(el => el));
        closeModal()
    }

    return (
        <>
            <div className="flex flex-row gap-2 flex-wrap">
                {value.map((el, key) => (
                    <div key={key} onClick={() => UpdateMode(el, key + 1)} className="flex flex-row bg-[var(--color-background)] items-center px-4 h-12 gap-x-2 rounded-lg">
                        <span className='relative top-0.5'>{el.name}</span>
                        <span className='text-xs border border-gray-300 rounded-sm px-2 py-1'>ویرایش</span>
                    </div>
                ))}
                <Button className="flex flex-row items-center" onClick={openModal} variant="destructive"><PlusIcon className='w-3' />اضافه کردن فرزند</Button>
            </div>
            <Dialog open={open}>
                <DialogContent className="flex flex-col sm:max-w-sm" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle>اضافه کردن فرزند</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4">
                        <Field
                            caption='نام و نام خانوادگی'
                            Icon={AccountIcon}
                            error={errors?.name?.message || ""}
                        >
                            <Input
                                placeholder='نام و نام خانوادگی را وارد کنید'
                                {
                                ...register('name', {
                                    required: 'نام را وارد کنید'
                                })}
                            />
                        </Field>
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
                        <Field caption='کد ملی' Icon={BarcodeFillIcon} error={errors?.national_code?.message || ""}>
                            <Input
                                maxLength={10}
                                minLength={7}
                                placeholder='کد ملی را وارد کنید'
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
                    <div className='flex flex-row w-full justify-between'>
                        <div className='flex flex-row gap-1'>
                            <Button type="submit" onClick={index ? updateChild : handleSubmit(add)}>{index ? "ویرایش" : "ثبت کودک"}</Button>
                            {index ? <Button type="submit" onClick={deleteChild} variant="destructive">حذف کودک</Button> : null}
                        </div>
                        <Button type="submit" onClick={triggerClose} variant="secondary">انصراف</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ChildDialog