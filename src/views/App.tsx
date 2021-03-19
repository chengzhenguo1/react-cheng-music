import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter, Switch } from 'react-router-dom'

import routes from '../router/index'

import Layout from '../components/Layout'

const App: React.FC = function App() {
  return (
      <HashRouter>
          <Layout>
              <Switch>
                  {renderRoutes(routes, { routes })}
              </Switch>
          </Layout>
      </HashRouter>
  )
}

export default App
