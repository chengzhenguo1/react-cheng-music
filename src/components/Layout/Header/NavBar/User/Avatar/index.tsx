import React, { memo } from 'react'

import './index.less'

import { Avatar as AvatarComponent } from 'antd'
import { UserOutlined } from '@ant-design/icons'


export default memo(function Avatar() {
    return (
        <div className='avatar'>
            <AvatarComponent  size={30} icon={<UserOutlined />} />
        </div>
    )
})
