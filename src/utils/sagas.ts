import {all} from 'redux-saga/effects'
import watchFetchLeaders from './redux/reducers/leaderboard'

export function* rootSaga() {
  yield all([
    watchFetchLeaders()
  ]);
}