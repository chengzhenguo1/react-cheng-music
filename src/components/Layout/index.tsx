import React, { memo } from 'react'

import './index.less'

import Header from './Header'
import Sider from './Sider'
import Footer from './Footer'

const Layout: React.FC = memo(({ children }) => {
    return (
        <div className='layout scroll-container'>
            <Header></Header>
            <main className='middle'>
                <Sider></Sider>
                <div className='content'>{children}</div>
            </main>
            <Footer></Footer>
        </div>
    )
})

export default Layout