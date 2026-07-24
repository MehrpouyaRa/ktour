import { ILogin } from "@/lib/types/auth";
import { useForm } from "react-hook-form";

function useLoginPage() {
    const form = useForm<ILogin>();

    return { form }
}

export default useLoginPage