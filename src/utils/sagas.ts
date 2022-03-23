import {all} from 'redux-saga/effects'
import {watchFetchLeaders} from './redux/reducers/leaderboard'
import {watchFetchTheme} from './redux/reducers/user'

export function* rootSaga() {
  yield all([
    watchFetchLeaders(),
    watchFetchTheme()
  ])
}