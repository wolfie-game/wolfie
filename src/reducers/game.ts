import {ACTIONS} from '../constants'

export function gameReducer(state, {type, item}) {
  switch (type) {
    case ACTIONS.PENDING:
      return {
        ...state,
        status: 'pending',
      }
    case ACTIONS.SUCCESS:
      return {
        ...state,
        game: item,
        status: 'success',
      }
    case ACTIONS.FAILED:
      return {
        ...state,
        status: 'failed',
      }
    default:
      return state
  }
}
