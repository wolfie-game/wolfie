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
}
