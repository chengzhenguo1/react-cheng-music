import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter, Switch, Route } from 'react-router-dom'

// import axios from '@/utils/axios'
import routes from '../router/index'

import Layout from '../components/Layout'





function App() {
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