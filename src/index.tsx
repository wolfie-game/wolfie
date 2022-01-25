import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './components/App/App'
import {Provider} from 'react-redux'
import store from './utils/redux/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('wolfie'),
)
