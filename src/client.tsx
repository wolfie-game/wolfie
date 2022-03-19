import * as React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import App from './components/App/App'
import {configureStore} from './utils/redux/store'

const store = configureStore(window.__INITIAL_STATE__);

// global redeclared types
declare global {
  interface Window {
    __INITIAL_STATE__: State;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

hydrate(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('wolfie'),
)

export default store