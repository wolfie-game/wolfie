import {createStore, applyMiddleware} from 'redux'
import {UserState} from './reducers/types'
import {userReducer} from './reducers/user'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'

const preloadedState = (window as any).__PRELOADED_STATE__ || {}

export const initialState: UserState = {
  auth: false,
  value: null,
}

function configureStore(preloadedState) {
  const store = createStore(userReducer, initialState)
  return store
}
const store = configureStore({})

export default store
