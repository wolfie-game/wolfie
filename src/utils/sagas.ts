import {all} from 'redux-saga/effects'
import {watchFetchLeaders} from './redux/reducers/leaderboard'
import {watchFetchTheme, watchFetchSetTheme} from './redux/reducers/user'
import {watchFetchTopics, watchFetchAddTopic, watchFetchGetTopic} from './redux/reducers/topic'

export function* rootSaga() {
  yield all([
    watchFetchLeaders(),
    watchFetchTheme(),
    watchFetchSetTheme(),
    watchFetchTopics(),
    watchFetchAddTopic(),
    watchFetchGetTopic()
  ])
}