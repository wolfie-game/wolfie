import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type User = {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

type UserStateValue = User | null

interface UserState {
  auth: boolean
  value: UserStateValue
}

const initialState: UserState = {
  auth: false,
  value: null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    checkAuth(state, action: PayloadAction<any>) {
      state.auth = action.payload
    },
    createUser(state, action) {
      state.auth = true
      state.value = action.payload
    },
    logOut(state, action) {
      state.auth = false
      state.value = null
    },
  },
})

export const {checkAuth, createUser, logOut} = userSlice.actions
export default userSlice.reducer
