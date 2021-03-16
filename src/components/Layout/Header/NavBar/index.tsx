import React, { memo } from 'react'

import './index.less'

import User from './User'
import Link from './Link'
import Item from './Item'

export default memo(function index() {
    return (
        <div className='nav-bar'>
            <User />
            <Item />
            <Link />
        </div>
    )
})
