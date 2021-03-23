import React, { memo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import './index.less'

import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const BcakForWard = memo(() => {
    const history = useHistory()
    const handleGoBack = () => history.goBack()
    const handleForward = () => history.goForward()
    return (
        <div className='back-forward'>
            <div className='menu'>
                <LeftOutlined onClick={handleGoBack} />
            </div>
            <div className='menu'>
                <RightOutlined onClick={handleForward} />
            </div>
        </div>
    )
})

export default BcakForWard
