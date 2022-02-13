import store from '../store'

export type TRootState = ReturnType<typeof store.getState>

export type User = {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

export type UserStateValue = User | null

export interface UserState {
  auth: boolean
  value: UserStateValue
  leaderboard?: any
  loading?: boolean
  error?: boolean
}
