import React, { memo, Fragment, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import './index.less'
import routes from '../../../router/index'

import { Menu } from 'antd'
import Title from './Title/index'


export default memo(function Sider() {
    const { pathname } = useLocation()
    const { push } = useHistory()

    console.log('xuanranle')


    const toMenupath = (e: any) => {
        if (e.key !== pathname) push(e.key)
    }

    return (
        <Menu
            className='sider-bar'
            defaultSelectedKeys={[pathname]}
            mode="inline"
            onClick={e => toMenupath(e)}
        >
            {
                routes.map(({ path, title, render, icon }) => {
                    const MyIcon = icon
                    return (
                        !render ?
                            <Fragment key={path}>
                                {/* 本地音乐上面添加一个我的音乐 */}
                                {title === '本地音乐' && <Title title='我的音乐' />}
                                <Menu.Item key={path} icon={MyIcon && <MyIcon />}>
                                    {title}
                                </Menu.Item>
                            </Fragment>
                            : null
                    )
                })
            }
        </Menu >
    )
})
