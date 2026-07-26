export interface IBook {
    id?: number
    created_at?: string
    name: string
    phone: string
    tour: string
    national_code: string
    phone_emergency: string
    description: string
    birth_date: string
    gender: "مرد" | "زن" | null
    medical_history: string
    children: { name: string, birth_date: string, national_code: string }[]
}