import React, { memo } from 'react'

import './index.less'

import { Input } from 'antd'
import { ZoomInOutlined } from '@ant-design/icons'

export default memo(function index() {
    return (
        <div className='serach'>
            <Input placeholder="搜索" className='serach-put' prefix={<ZoomInOutlined />} />
        </div>
    )
})
