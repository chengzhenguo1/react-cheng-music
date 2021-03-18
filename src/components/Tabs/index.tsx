import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import './index.less'

import { RouterConfig } from '../../router/index'

interface TabProps {
    routes: RouterConfig[] | undefined
}



const TabList: React.FC<TabProps> = memo(function TabList({ children, routes }) {
    return (
        <div className='tab-list'>
            {routes!.map((item) => {
                return <NavLink key={item.path} to={item.path}>{item.title}</NavLink>
            })}
        </div>
    )
})

export default TabList