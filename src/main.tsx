import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import stores from './store/index'
import './assets/normalize.css'

import App from './views/App'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
