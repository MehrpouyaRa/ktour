import useToast from "@/component/hooks/useToast";
import { createClient } from "@/lib/helpers/supabase"
import { IBook } from "@/lib/types/booking";
import { useState } from "react";
import { useForm } from "react-hook-form"

export type IBookForm = Omit<IBook, 'id' | 'created_at'>

function useLandingForm() {
    const form = useForm<IBookForm>({
        defaultValues: {
            adults_count: 1,
            children_count: 0,
        }
    })
    const [Loading, setLoading] = useState(false)
    const { notify } = useToast()
    const { setValue, getValues } = form

    async function created(formData: IBookForm) {
        try {
            setLoading(true)
            const supabase = await createClient()
            formData.tour = "راهپیمایی مشهد اربعین"
            formData.adults_count = typeof formData.adults_count !== "number" ? parseInt(formData.adults_count) : formData.adults_count
            formData.children_count = typeof formData.children_count !== "number" ? parseInt(formData.children_count) : formData.children_count
            const { error } = await supabase
                .from("booking")
                .insert(formData)
                .select();
            if (error) throw error
            setLoading(false)
            notify({ message: 'ثبت نام شما انجام شد با شما تماس خواهیم گرفت', status: 'success' })
            form.reset()
        } catch (error: any) {
            setLoading(false)
            if (error?.code == "23505") notify({ message: 'این شماره موبایل یا کد ملی قبلاً برای این تور ثبت شده است.', status: 'error' })
            else notify({ message: 'خطایی رخ داد', status: 'error' })
            console.log(error);
        }
    }

    function changeNumber({ field, operate }: { field: 'adults_count' | 'children_count', operate: 'plus' | 'minus' }) {
        if (operate === 'plus') setValue(field, getValues(field) < 19 ? getValues(field) + 1 : getValues(field))
        else setValue(field, getValues(field) > (field === 'adults_count' ? 1 : 0) ? getValues(field) - 1 : getValues(field))
    }

    return { form, created, Loading, changeNumber }
}

export default useLandingForm