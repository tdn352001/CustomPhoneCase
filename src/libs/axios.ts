import { serverUrl } from '@/libs/constants/api'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ApiError {
  code?: number | string
  message?: string
  status?: number
}

const axiosClient = axios.create({
  baseURL: serverUrl,
})

axiosClient.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
      }
    }
  }

  return config
})

axiosClient.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(handleError(error))
  }
)

export const handleError = (error: any): ApiError => {
  if (axios.isAxiosError(error)) {
    const serverError = error.response?.data

    return {
      status: error.response?.status,
      code: serverError?.code || error.code,
      message: serverError?.message || error.message,
    }
  }

  return {
    code: error.code,
    message: error.message,
  }
}

const getApi = <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<T> =>
  axiosClient.get<T, T, D>(url, config)

const postApi = <T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> =>
  axiosClient.post<T, T, D>(url, data, config)

const postForm = <T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T> =>
  axiosClient.postForm<T, T, D>(url, data, config)

const putApi = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
): Promise<R> => axiosClient.put<T, R, D>(url, data, config)

const deleteApi = <T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> =>
  axiosClient.delete<T, R, D>(url, config)

export { getApi, postApi, postForm, putApi, deleteApi }

export default axiosClient
