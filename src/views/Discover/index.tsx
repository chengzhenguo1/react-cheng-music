import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter, NavLink } from 'react-router-dom'


interface TabProps {
    routes: any
}


const Discover: React.FC<TabProps> = memo(function Discover({ routes, children }) {
    console.log(routes[1].routes)
    return (
        <HashRouter>
            {/* 跳转链接 */}
            <div>
                {routes[1].routes.map(item => {
                    return <NavLink key={item.path} to={item.path}>{item.title}</NavLink>
                })}
            </div>
            {/* 匹配子路由 */}
            <div>
                {
                    renderRoutes(routes[1].routes)
                }
            </div>
            {/* undefined */}
            <div>
                {children}
            </div>
        </HashRouter>
    )
})


export default Discover