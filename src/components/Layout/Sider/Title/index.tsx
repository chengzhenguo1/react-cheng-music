import React, { memo } from 'react'

import './index.less'

export default memo(function index(props: { title: string }) {
    return (
        <div className='silder-title'>
            {props.title}
        </div>
    )
})
