// import React from 'react'
// import ReactDOM from 'react-dom'
// import './components/App/App.scss'

// const Client = () => {
//   return (
//     <h1>hi</h1>
//   )
// }

// export default Client
import * as React from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider as ReduxProvider} from 'react-redux'
// import {loadableReady} from '@loadable/component'
// import 'babel-polyfill'

import App from './components/App/App'
// import { State } from 'types'
import {configureStore} from './utils/redux/store'

const {store, history} = configureStore(window.__INITIAL_STATE__);

// global redeclared types
declare global {
    interface Window {
        __INITIAL_STATE__: State;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('wolfie'),
);
