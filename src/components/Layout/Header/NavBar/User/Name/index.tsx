import React, { memo } from 'react'

import './index.less'

import { CaretDownOutlined } from '@ant-design/icons'

export default memo(function index() {
    return (
        <div className='name'>
            未登录
            <CaretDownOutlined style={{ 'marginLeft': '2px' }} />
        </div>
    )
})
