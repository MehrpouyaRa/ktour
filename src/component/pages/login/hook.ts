import { useForm } from "react-hook-form";

interface form {
    number: number
}

function useLoginPage() {
    const form = useForm<form>();

    return { form }
}

export default useLoginPage