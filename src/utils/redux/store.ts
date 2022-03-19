import {createStore, applyMiddleware} from 'redux'
import {UserState} from './reducers/types'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'
import {composeWithDevTools} from 'redux-devtools-extension'

export const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState: {}) {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  return store
}

export const action = (type) => {
  store.dispatch({type})
}
