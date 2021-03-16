import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import { HashRouter, NavLink } from 'react-router-dom'
import { Button } from 'antd'

import axios from '@/utils/axios'
import routes from '@router/index'

import Layout from '@components/Layout'





function App(props: any) {
  return (
    <div>
      <Layout>
        1
      </Layout>
    </div>
  )
}

export default inject('user')(observer(App))