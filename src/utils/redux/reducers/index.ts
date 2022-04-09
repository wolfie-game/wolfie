import {combineReducers} from 'redux'
import user from './user'
import leaderboard from './leaderboard'
import topic from './topic'

const reducers = combineReducers({
  user,
  leaderboard,
  topic
})

export default reducers
