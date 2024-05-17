import { User } from '@/services/auth-service/types'
import { RootState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user?: User
}

const initialState: AuthState = {}

// Create the counter slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    logout(state) {
      state.user = undefined
    },
  },
})

export const authActions = authSlice.actions

export const authSelectors = {
  user: (state: RootState) => state.auth.user,
}

export default authSlice
