import React, { memo, useEffect } from 'react'
import { HashRouter, NavLink, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../../router/index'





const Discover: React.FC = memo(function Discover({ children }) {
    const routeList = routes[1].routes
    console.log(routeList)
    return (
        <HashRouter>
            {/* 跳转链接 */}
            <div>
                {routeList.map((item) => {
                    return <NavLink key={item.path} to={item.path}>{item.title}</NavLink>
                })}
            </div>
            {/* 匹配子路由 */}
            <div>
                < Redirect to="/discover/recommend" />
                {renderRoutes(routeList)}
            </div>
        </HashRouter>
    )
})


export default Discover