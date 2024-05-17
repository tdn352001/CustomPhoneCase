export type User = {
  id: string
  email: string
  user_name: string
  first_name: string
  last_name: string
  role?: string
  created_at: string
  updated_at: string
}

export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  data: {
    access_token: string
    user: User
  }
}

export type GetMeResponse = {
  data: User
}
