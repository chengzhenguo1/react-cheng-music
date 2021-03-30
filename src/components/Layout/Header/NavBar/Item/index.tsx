import React, { memo, useCallback, useState } from 'react'

import { Popover } from 'antd'
import { SettingOutlined, SkinOutlined, MailOutlined } from '@ant-design/icons'
import Skin from './Skin'

import './index.less'

const Item = memo(() => {
    const [skinShow, setskinShow] = useState(false)
    
    const toggleSkin = useCallback(
        (flag = true) => {
            setskinShow(flag)
        },
        [skinShow, setskinShow],
    )

    return (
        <div className='item'>
            <div className='item-set'>
                <SettingOutlined title='设置' width={20} height={20} />
            </div>
            <div className='item-skin'>
                <SkinOutlined title='皮肤' width={20} height={20} onClick={toggleSkin} />
                <Skin show={skinShow} onClickAway={toggleSkin} />
            </div>
            <div className='item-message'>
                <MailOutlined title='消息' width={20} height={20} />
            </div>
        </div>
    )
 })

export default Item
