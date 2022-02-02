import {LoadStatus, Nullable, ItemActionType} from './types'
import {ACTIONS} from '../constants'

interface User {
  id?: number
  avatar?: string
  login?: string
  first_name?: string
  second_name?: string
  display_name?: string
  email?: string
  phone?: string
}

type UserState = {
  item: Nullable<User>
  status: LoadStatus
}

const defaultState: UserState = {
  status: 'failed',
  item: null,
}

export function userReducer(
  state: UserState = defaultState,
  {type, item}: ItemActionType<User>,
): UserState {
  switch (type) {
    case ACTIONS.PENDING:
      return {
        ...state,
        status: 'pending',
      }
    case ACTIONS.SUCCESS:
      return {
        ...state,
        status: 'success',
      }
    case ACTIONS.FAILED:
      return {
        ...state,
        status: 'failed',
      }
    case ACTIONS.SET_ITEM:
      return {
        ...state,
        item,
      }
    default:
      return state
  }
}

// export function loadSuccess(): BaseActionType<keyof ACTIONS> {
//   return {type: ACTIONS.SUCCESS}
// }
// export function loadFailed(): BaseActionType<keyof ACTIONS> {
//   return {type: ACTIONS.FAILED}
// }
// export function loadPending(): BaseActionType<keyof ACTIONS> {
//   return {type: ACTIONS.PENDING}
// }

export function setUser(user: User): ItemActionType<User> {
  return {type: ACTIONS.SET_ITEM, item: user}
}
