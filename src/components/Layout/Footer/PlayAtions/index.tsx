import React from 'react'
import { observer } from 'mobx-react'
import {
 StepForwardOutlined, StepBackwardOutlined, CaretRightOutlined, PauseOutlined, 
} from '@ant-design/icons'
import useStores from '../../../../hooks/useStores'

import './index.less'

const PlayAtions: React.FC = () => {
    const { Music } = useStores()
    const handelPlayMusic = (flag:boolean) => {
        Music.setMusicState(flag)
    }
    return (
        <div className='play-ations'>
            <StepBackwardOutlined />
            <div className='play-control'>
                {Music.audioInfo.paused
                ? <CaretRightOutlined onClick={(e) => handelPlayMusic(true)} /> 
                : <PauseOutlined onClick={(e) => handelPlayMusic(false)} />}
            </div>
            <StepForwardOutlined />
        </div>
)
}

export default observer(PlayAtions)
