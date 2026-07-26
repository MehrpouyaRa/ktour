import useToast from "@/component/hooks/useToast";
import { createClient } from "@/lib/helpers/supabase"
import { IBook } from "@/lib/types/booking";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { useBoolean } from 'usehooks-ts'

export type IBookForm = Omit<IBook, 'id' | 'created_at'>

function useLandingForm() {
    const form = useForm<IBookForm>({
        defaultValues: {
            children: [],
            gender: null,
            birth_date: ""
        }
    })
    const [Loading, setLoading] = useState(false)
    const { notify } = useToast()
    const dialog = useBoolean(false)
    const dialogSucess = useBoolean(false)

    async function created(formData: IBookForm) {
        try {
            setLoading(true)
            const supabase = await createClient()
            formData.tour = "راهپیمایی مشهد اربعین"
            const { error } = await supabase.from("booking").insert(formData);
            if (error) throw error
            setLoading(false)
            notify({ message: 'ثبت نام شما انجام شد با شما تماس خواهیم گرفت', status: 'success' })
            dialogSucess.setTrue()
            form.reset()
        } catch (error: any) {
            setLoading(false)
            if (error?.code == "23505") notify({ message: 'این شماره موبایل یا کد ملی قبلاً برای این تور ثبت شده است.', status: 'error' })
            else notify({ message: 'خطایی رخ داد', status: 'error' })
            console.log(error);
        }
    }

    const genderItems = [{ label: "مرد", value: "مرد" }, { label: "زن", value: "زن" }]

    return { form, created, Loading, genderItems, dialog, dialogSucess }
}

export default useLandingForm