import {ACTIONS} from '../constants'

export function leaderBoardReducer(state, {type, item}) {
  if (state === undefined) {
    return {
      leaders: [],
    }
  }

  switch (type) {
    case ACTIONS.SUCCESS:
      return {
        ...state,
        leaders: item,
      }
    default:
      return state
  }
}
