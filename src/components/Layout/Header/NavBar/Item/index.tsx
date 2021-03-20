import React, { memo } from 'react'

import { SettingOutlined, SkinOutlined, MailOutlined } from '@ant-design/icons'

import './index.less'

const Item = memo(() => (
    <div className='item'>
        <SettingOutlined title='设置' width={20} height={20} />
        <SkinOutlined title='皮肤' width={20} height={20} />
        <MailOutlined title='消息' width={20} height={20} />
    </div>
    ))

export default Item
