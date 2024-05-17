import { getApi, postApi } from '@/libs/axios'
import { GetMeResponse, LoginRequest, LoginResponse } from '@/services/auth-service/types'

export * from './types'

const login = (request: LoginRequest) => {
  return postApi<LoginResponse>('/auth/login', request)
}

const getCurrentUser = () => {
  return getApi<GetMeResponse>('/user/me')
}

export const authService = {
  login,
  getCurrentUser,
}
