import React, { memo } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

import './index.less'

import { AliwangwangFilled } from '@ant-design/icons'

const Logo = memo(() => (
    <Router>
        <Link to='./' className='logo'>
            <AliwangwangFilled className='icon' />
            <h1 className='logo-title'>橙子音乐</h1>
        </Link>
    </Router>
    ))

export default Logo
