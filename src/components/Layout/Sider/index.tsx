import React, { Fragment, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './index.less'
import routes from '../../../router/index'

import { Menu } from 'antd'
import Title from './Title/index'

export default memo(function Sider() {
    const { pathname } = useLocation()
    return (
        <Menu
            className='sider'
            defaultSelectedKeys={[pathname]}
            mode="inline"
        >
            {
                routes.map(item => {
                    return (
                        <Fragment key={item.path}>
                            {item.title === '我的下载' && <Title title='我的音乐' />}
                            <Menu.Item key={item.path}>
                                <Link to={item.path}>
                                    {item.icon && <item.icon />}
                                    {item.title}
                                </Link>
                            </Menu.Item>
                        </Fragment>
                    )
                })
            }
        </Menu>
    )
})
