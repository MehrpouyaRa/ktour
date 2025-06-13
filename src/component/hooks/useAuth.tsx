import authService from "@/lib/endpoints/auth/auth";
import useAppStore from "@/lib/store/app";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function useAuth() {
  const { actions: { update_data } } = useAppStore()
  const { mutateAsync, isPending } = useMutation({
    mutationFn: authService.login
  })
  const router = useRouter()

  async function login() {
    const { data } = await mutateAsync()
    update_data(data);
    router.push('/dashboard')
  }

  function logout() {
    update_data(null);
    router.push('/')
  }

  return { login, logout, isPending }
}

export default useAuth