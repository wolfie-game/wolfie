import {all} from 'redux-saga/effects'
import watchFetchLeaders from './redux/reducers/leaderboard'

// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }

export function* rootSaga() {
  yield all([
    watchFetchLeaders()
  ]);
}