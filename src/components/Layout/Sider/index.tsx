import React, {
 memo, Fragment, useCallback, useState, useEffect,
} from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import './index.less'
import { Menu } from 'antd'
import { menuRoutes } from '../../../router/index'

import MenuTitle from './Title/index'

const Silder = memo(() => {
    const { pathname } = useLocation()
    const { push } = useHistory()
    const [filterPath, setFilterPath] = useState(`/${pathname.split('/')[1]}`)
    /* 过滤页面路径不匹配问题 */
    useEffect(() => {
        setFilterPath(`/${pathname.split('/')[1]}`)
    }, [pathname])

    /* 点击路由跳转页面 */
    const toMenupath = useCallback(
        (e) => {
            if (e.key !== filterPath) push(e.key)
        },
    [pathname],
    ) 

    return (
        <Menu
          className='sider-bar'
          defaultSelectedKeys={[filterPath]}
          mode='inline'
          key={filterPath}
          onClick={(e) => toMenupath(e)}>
            {
                menuRoutes.map(({
 path, title, Icon, 
}) => (
    <Fragment key={path}>
        {/* 本地音乐上面添加一个我的音乐 */}
        {title === '本地音乐' && <MenuTitle title='我的音乐' />}
        <Menu.Item key={path} icon={Icon && <Icon />}>
            {title}
        </Menu.Item>
    </Fragment>
                    ))
            }
        </Menu>
    )
})

export default Silder
