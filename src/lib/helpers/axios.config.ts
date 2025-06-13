import axios, { AxiosResponse, AxiosError } from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENDPOINTS_APP_URL,
})

// Request Interceptor
api.interceptors.request.use(
    async (config) => {
        return config
    },
    (error: AxiosError) => Promise.reject(error)
)

// Response Interceptor
api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error)
    }
)

export default api