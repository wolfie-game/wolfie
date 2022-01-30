import {createStore, applyMiddleware} from 'redux'
import {UserState} from './reducers/types'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'
import {rootSaga} from '../sagas'
import watchFetchLeaders from './reducers/leaderboard'

const preloadedState = (window as any).__PRELOADED_STATE__ || {}

const sagaMiddleware = createSagaMiddleware()

export const initialState: UserState = {
  auth: false,
  value: null,
  loading: false,
  error: false,
  leaderboard: []
}

function configureStore(preloadedState) {
  // @ts-ignore
  const store = createStore(reducers, applyMiddleware(sagaMiddleware))
  return store
}
const store = configureStore({})

sagaMiddleware.run(watchFetchLeaders)

export const action = type => {alert('444'); store.dispatch({type})}

export default store
