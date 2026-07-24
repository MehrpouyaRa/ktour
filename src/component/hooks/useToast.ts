import { Bounce, toast, ToastOptions } from 'react-toastify'

function useToast() {
    const notify = ({ message, status, ...props }: { message: string, status: 'success' | 'warn' | 'error' | 'info' } & ToastOptions) => {
        const t = toast[status]
        return t(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            rtl: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            style: { fontFamily: "var(--vazirmatn)" },
            transition: Bounce,
            ...props
        })
    }
    return { notify }
}

export default useToast