import { IBook } from "@/lib/types/booking"

const isValidAge = (birthDate: string | Date): boolean => {
    const birth = new Date(birthDate)
    const today = new Date()

    let age = today.getFullYear() - birth.getFullYear()

    const monthDiff = today.getMonth() - birth.getMonth()

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
        age--
    }

    return age >= 0 && age <= 18
}

const hasDuplicateCode = (items: IBook["children"], national_code: string): boolean => {
    return Boolean(items.find(el => el.national_code ===national_code))
}

export const childRegisterHelper = {
    isValidAge,
    hasDuplicateCode
}