import React, { memo, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { RouterConfig } from '../../../../router/index'

import { Menu } from 'antd'
import Title from '../Title/index'



const MenuList: React.FC<RouterConfig> = memo(function MenuList({ path, title, icon, render }) {
    const MyIcon = icon
    return (
        !render ?
            <Fragment key={path}>
                {/* 本地音乐上面添加一个我的音乐 */}
                {title === '本地音乐' && <Title title='我的音乐' />}
                <Menu.Item key={path}>
                    <Link to={path}>
                        {MyIcon && <MyIcon />}
                        {title}
                    </Link>
                </Menu.Item>
            </Fragment>
            : null
    )
})

export default MenuList

