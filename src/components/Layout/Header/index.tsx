import React, { memo } from 'react'

import './index.less'

import Logo from './Logo'

export default memo(function index() {
    return (
        <div className='headers'>
            <Logo />
        </div>
    )
})
