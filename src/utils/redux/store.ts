import {createStore} from 'redux'
import userReducer from './reducers/user'
import {configureStore} from '@reduxjs/toolkit'

const preloadedState = (window as any).__PRELOADED_STATE__ || {}

const store = configureStore({
  preloadedState,
  reducer: {
    user: userReducer,
  },
})

export default store
