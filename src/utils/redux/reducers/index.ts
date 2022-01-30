import {combineReducers} from 'redux'
import userReducer from './user'
import {leaderboardReducer} from './leaderboard'

const reducers = combineReducers({
  userReducer, leaderboardReducer,
});

export default reducers