import React from 'react'
import { inject, observer } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import axios from '@/utils/axios'
import routes from '@router/index'

import Layout from '@components/Layout'





function App(props: any) {
  return (
    <div>
      <HashRouter>
        <Layout>
          {renderRoutes(routes)}
        </Layout>
      </HashRouter>
    </div>
  )
}

export default inject('user')(observer(App))