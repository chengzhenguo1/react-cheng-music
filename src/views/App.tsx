import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import { HashRouter, NavLink } from 'react-router-dom'

import axios from '@/utils/axios'

import routes from '@router/index'

import { Button } from 'antd'





function App(props: any) {
  return (
    <div>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
      <HashRouter>
        <NavLink to="/discover/player">
          123
        </NavLink>
      </HashRouter>
    </div>
  )
}

export default inject('user')(observer(App))