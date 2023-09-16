import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.user.userName = action.payload.user.user_metadata.name
      state.user.email = action.payload.user.email
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = {}
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer