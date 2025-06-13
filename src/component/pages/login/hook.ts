import authService from "@/lib/endpoints/auth/auth";
import useAppStore from "@/lib/store/app";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

interface form {
    number: number
}

function useLoginPage() {
    const form = useForm<form>();

    return { form }
}

export default useLoginPage