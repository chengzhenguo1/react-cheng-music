import React, { memo } from 'react'

import './index.less'

import { LeftOutlined, RightOutlined } from '@ant-design/icons'

export default memo(function index() {
    return (
        <div className='back-forward'>
            <div className='menu'>
                <LeftOutlined />
            </div>
            <div className='menu'>
                <RightOutlined />
            </div>
        </div>
    )
})
