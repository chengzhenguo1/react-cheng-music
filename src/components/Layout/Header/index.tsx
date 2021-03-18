import React, { memo } from 'react'

import './index.less'

import Logo from './Logo'
import BackForward from './BackForward'
import Search from './Search'
import NavBar from './NavBar'

export default memo(function index() {
    return (
        <div className='header'>
            <Logo />
            <div className='count'>
                <div className='count-left'>
                    <BackForward />
                    <Search />
                </div>
                <NavBar />
            </div>
        </div>
    )
})
