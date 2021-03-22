import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './index.less'
import {
 Image, Avatar, 
} from 'antd'
import { Playlist } from '../../../api/types/songlist'
import { formatCount, formatDatetime } from '../../../utils/format'

interface IProps {
    data?: Playlist
    // onPlayAll: (autoPlay?: boolean) => void
}

const SongLists: React.FC<IProps> = memo(({ data }) => (
    <div className='base-info'>
        <Image src={data?.coverImgUrl} preview={false} loading='lazy' />
        <div className='base-des'>
            <div className='info-title'>
                <div className='info-tag'>歌单</div>
                <div className='title-name title'>{data?.name}</div>
            </div>
            <div className='info-author'>
                <Avatar size={25} src={`${data?.creator?.avatarUrl}?param=25y25`} />
                <Link to='/'>{data?.creator.nickname}</Link>
                <span className='info-time base-color'>
                    {formatDatetime(data?.createTime)}
                    创建
                </span>
            </div>
            <div className='info-btn'>播放全部</div>
            <div className='info-tags'>
                标签：
                {data?.tags.map((item) => (
                    <>
                        <Link to='/'>
                            {item}
                        </Link>
                        <i style={{ display: 'none' }}>/</i>
                    </>
                     ))}
            </div>
            <div className='info-count'>
                <div>
                    歌曲：
                    <span className='base-color'>                    
                        {data?.trackCount}
                    </span>
                </div>
                <div>
                    播放：
                    <span className='base-color'>                    
                        {formatCount(data?.playCount)}
                    </span>
                </div>
            </div>
            <div className='info-des'>
                简介：
                <span className='base-color'>                    
                    {data?.description}
                </span>
            </div>
        </div>
    </div>
))

export default SongLists
