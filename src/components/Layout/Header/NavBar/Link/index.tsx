import React, { memo } from 'react'

import './index.less'

import { GithubOutlined } from '@ant-design/icons'


export default memo(function Item() {
    return (
        <a className='git-link' href="https://github.com/chengzhenguo1/react-cheng-music">
            <GithubOutlined />
        </a>
    )
})
