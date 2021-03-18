import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import stores from './store/index'
import '@/styles/variables.css'
import './assets/normalize.css'
import './styles/media.less'

import App from './views/App'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
