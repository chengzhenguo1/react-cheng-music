import React, { memo } from 'react'
import { useAsync } from 'react-use'
import { useParams } from 'react-router-dom'

import BaseInfo from './BaseInfo/index'
import { IDictionary } from '../../typings/global'
import SongListApi from '../../api/songlist'

const SongListDetail: React.FC = memo(() => {
    const { id } = useParams<IDictionary<string>>()

    const { value } = useAsync(async () => {
        const res = await SongListApi.getSongList(id)
        return res
      }, [id])

    return (
        <div className='song-list-detail'>
            <div className='song-baseinfo'>
                <BaseInfo data={value?.playlist} />
            </div>
            <div className='tags'>
                歌曲列表-评论-收藏者
            </div>
            <div className='song-content'>
                下面啊
            </div>
        </div>
    )
})

export default SongListDetail
