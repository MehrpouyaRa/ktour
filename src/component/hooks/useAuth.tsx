import { createClient } from "@/lib/helpers/supabase";
import useAppStore from "@/lib/store/app";
import { ILogin } from "@/lib/types/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useToast from "./useToast";

function useAuth() {
  const { actions: { update_data } } = useAppStore()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { notify } = useToast()

  async function login(form: ILogin) {
    try {
      setLoading(true)
      const supabase = await createClient()
      const { data } = await supabase.auth.signInWithPassword(form)

      update_data({
        tokens: { access_token: data.session?.access_token! },
        user: {
          email: data.user?.email!,
          id: data.user?.id!
        }
      });
      router.push('/dashboard')
      notify({ message: 'به ناحیه کاربری خوش امدید', status: 'success' })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  function logout() {
    update_data(null);
    router.push('/')
  }

  return { login, logout, loading }
}

export default useAuth