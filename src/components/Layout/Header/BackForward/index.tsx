import React, { memo } from 'react'

import './index.less'

import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const BcakForWard = memo(() => (
    <div className='back-forward'>
        <div className='menu'>
            <LeftOutlined />
        </div>
        <div className='menu'>
            <RightOutlined />
        </div>
    </div>
))

export default BcakForWard
