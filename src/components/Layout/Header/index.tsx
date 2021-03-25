import React, { memo } from 'react'

import './index.less'

import Logo from './Logo'
import BackForward from './BackForward'
import Search from './Search'
import NavBar from './NavBar'
import LoginDialog from './LoginDialog'

const Header = memo(() => (
    <div className='header'>
        <Logo />
        <div className='count'>
            <div className='count-left'>
                <BackForward />
                <Search />
            </div>
            <LoginDialog />
            <NavBar />
        </div>
    </div>
))

export default Header
