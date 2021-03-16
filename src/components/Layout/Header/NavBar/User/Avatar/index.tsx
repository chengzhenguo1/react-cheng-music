import React, { memo } from 'react'

import './index.less'

import { QqCircleFilled } from '@ant-design/icons'


export default memo(function index() {
    return (
        <div className='avatar'>
            <QqCircleFilled style={{ 'fontSize': '26px', 'color': '#E0E0E0' }} />
        </div>
    )
})
