import {combineReducers} from 'redux'
import {userReducer} from './user'
import {gameReducer} from './game'
import {leaderBoardReducer} from './leaderBoard'

export default combineReducers({
  // user: userReducer,
  // game: gameReducer,
  leaders: leaderBoardReducer,
})
