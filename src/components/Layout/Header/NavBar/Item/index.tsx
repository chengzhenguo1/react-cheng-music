import React, { memo } from 'react'

import { SettingOutlined, SkinOutlined, MailOutlined } from '@ant-design/icons'

import './index.less'

export default memo(function index() {
    return (
        <div className='item'>
            <SettingOutlined title='设置' />
            <SkinOutlined title='皮肤' />
            <MailOutlined title='消息' />
        </div>
    )
})
