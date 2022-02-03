import {createStore, applyMiddleware} from 'redux'
import {UserState} from './reducers/types'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'
import watchFetchLeaders from './reducers/leaderboard'
import {composeWithDevTools} from 'redux-devtools-extension'

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
  const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  return store
}
const store = configureStore({})

sagaMiddleware.run(watchFetchLeaders)

export const action = type => {store.dispatch({type})}

export default store
