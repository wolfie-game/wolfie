import {createStore, applyMiddleware} from 'redux'
import {UserState} from './reducers/types'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import 'regenerator-runtime/runtime'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootSaga} from '../sagas'

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export function configureStore(initialState: {}) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  if (!isServer) {
    sagaMiddleware.run(rootSaga)
  }

  return {store}
}

export const action = (type) => {
  store.dispatch({type})
}
