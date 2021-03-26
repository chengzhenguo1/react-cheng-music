import React, { useEffect } from 'react'
import { observer } from 'mobx-react'

import { Image, Tooltip } from 'antd'

import { DoubleLeftOutlined, DoubleRightOutlined, MenuFoldOutlined } from '@ant-design/icons'
import useStores from '../../../hooks/useStores'
import ProgressBar from './ProgressBar'
import Artist from './Artist'
import AudioTimer from './AudioTimer'
import PlayAtions from './PlayAtions'
import PlayMode from './PlayMode'
import PlayRecord from './PlayRecord'
import PlayVolume from './PlayVolume'
import './index.less'

const Footer = () => {
    const { Music } = useStores()

    return (
        <div className='footer'>
            {/* 进度条 */}
            <div className='progress'>
                <ProgressBar />
            </div>
            {/* 信息 */}
            <div className='footer-wrap'>
                <div className='wrap-pic'>
                    {Music.audioInfo.paused && <DoubleRightOutlined />}
                    {!Music.audioInfo.paused && <DoubleLeftOutlined />}
                    <Image src={`${Music.authorInfo.picUrl}?param=40y40`} preview={false} width={40} height={40} placeholder />
                </div>
                <div>
                    <div className='wrap-info'>
                        <span>{Music.authorInfo.name}</span>
                        <Artist name={Music.authorInfo.author} id={1} />
                    </div>
                    <div className='wrap-time'>
                        <AudioTimer sumTime={Music.audioInfo.duration} currentTime={Music.audioInfo.time} />
                    </div>
                </div>
            </div>
            {/* 播放 */}
            <div className='footer-ation'>
                <PlayAtions />
            </div>
            {/* 右侧 */}
            <div className='other-ation'>
                <PlayMode />
                <Tooltip placement='top' title='打开播放列表'>
                    <MenuFoldOutlined />
                </Tooltip>
                <PlayVolume />
            </div>
            {false && <PlayRecord />}
        </div>
    )
 }

 export default observer(Footer)
