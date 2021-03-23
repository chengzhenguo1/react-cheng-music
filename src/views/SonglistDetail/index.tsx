import React, { memo, useCallback } from 'react'
import { useAsync } from 'react-use'
import { useParams } from 'react-router-dom'

import { Tabs } from 'antd'
import Comments from '../../components/Comments/index'
import Musiclist from '../../components/MusicList/index'
import BaseInfo from './BaseInfo/index'
import { IDictionary } from '../../typings/global'
import SongListApi from '../../api/songlist'
import './index.less'

const { TabPane } = Tabs

const SongListDetail: React.FC = memo(() => {
    const { id } = useParams<IDictionary<string>>()

    const { value } = useAsync(async () => {
        const res = await SongListApi.getSongList(id)
        return res
      }, [id])

    const getData = useCallback(
        (e:string) => {
           if (e === '2') {
               console.log(`请求评论${id}`)
           }
        },
        [],
    )

    return (
        <div className='song-list-detail'>
            <div className='song-baseinfo'>
                <BaseInfo data={value?.playlist} />
            </div>
            <div className='song-content'>
                <Tabs defaultActiveKey='1' className='song-tabs' onTabClick={getData}>
                    <TabPane tab='歌曲列表' key='1'>
                        <Musiclist data={value?.playlist.tracks} />
                    </TabPane>
                    <TabPane tab='评论' key='2'>
                        <Comments />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
})

export default SongListDetail
