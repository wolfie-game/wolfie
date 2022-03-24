import {combineReducers} from 'redux'
import user from './user'
import leaderboard from './leaderboard'

const reducers = combineReducers({
  user,
  leaderboard,
})

export default reducers
