import React from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'
import useStores from '~/hooks/useStores'

import './index.less'

interface IProps{
    isShow: boolean
}

const PlayRecord: React.FC<IProps> = ({ isShow }) => {
    console.log(isShow)
    const stores = useStores()
    return (
        <div className={cn('play-record', isShow ? 'show' : '')}>
            历史记录
        </div>
)
}

export default observer(PlayRecord)
