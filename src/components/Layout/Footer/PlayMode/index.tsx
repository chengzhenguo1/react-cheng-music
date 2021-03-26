import React, { memo, useState } from 'react'

import { OrderedListOutlined, RedoOutlined, RetweetOutlined } from '@ant-design/icons'

import { Tooltip } from 'antd'
import { MODE_TYPE, MODE } from '../../../../constants/play'

const PlayMode: React.FC = memo(() => {
    const [state, setstate] = useState(MODE.SHUFFLE_PLAYBACK)
    const handleChangePlayMode = () => {
        console.log(MODE.SHUFFLE_PLAYBACK)
    }
    return (
        <>
            <Tooltip placement='top' title={MODE_TYPE[state].mode}>
                {MODE_TYPE[state].mode === '顺序播放' && <OrderedListOutlined onClick={handleChangePlayMode} />}
                {MODE_TYPE[state].mode === '循环播放' && <RedoOutlined onClick={handleChangePlayMode} />}
                {MODE_TYPE[state].mode === '随机播放' && <RetweetOutlined onClick={handleChangePlayMode} />}
            </Tooltip>
        </>
)
 })

export default PlayMode
