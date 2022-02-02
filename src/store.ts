import {createStore} from 'redux'

import reducer from './reducers'

export default function configureStore(preloadedState = defaultStore) {
  const store = createStore(reducer, preloadedState)
  return store
}

const defaultStore = {
  leaders: [],
}
