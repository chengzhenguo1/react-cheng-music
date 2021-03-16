import React, { memo } from 'react'

import './index.less'

import Avatar from './Avatar'
import Name from './Name'

export default memo(function index() {
    return (
        <div className='user'>
            <Avatar />
            <Name />
        </div>
    )
})
