import React from 'react'
import { observer } from 'mobx-react'

import { NotificationOutlined } from '@ant-design/icons'
import { Slider } from 'antd'
import useStores from '../../../../hooks/useStores'
import './index.less'

const PlayVolume: React.FC = () => (
    <div className='play-volume'>
        <NotificationOutlined />
        <Slider value={10} />
    </div>
)

export default observer(PlayVolume)
