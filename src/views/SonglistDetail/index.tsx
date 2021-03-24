import React, { memo, useEffect } from 'react'
import { useAsyncFn, useAsync } from 'react-use'
import { useParams } from 'react-router-dom'

import { Tabs } from 'antd'
import Comments from '../../components/Comments/index'
import Musiclist from '../../components/MusicList/index'
import BaseInfo from './BaseInfo/index'
import { IDictionary } from '../../typings/global'
import SongListApi from '../../api/songlist'
import { LickType } from '../../api/recomment'
import './index.less'

const { TabPane } = Tabs

const SongListDetail: React.FC = memo(() => {
    const { id } = useParams<IDictionary<string>>()
    
    const { value: songList } = useAsync(async () => {
        const res = await SongListApi.getSongList(id)
        return res
      }, [id])

      const [{ value: songComment }, getSongComment] = useAsyncFn(async (page) => { 
        const res = await SongListApi.getSongComment(id, page)
        return res
      }, [])

      useEffect(() => {
        getSongComment()
      }, [])

      const onChangePage = (page:number) => {
          getSongComment(page)
      }
    
    return (
        <div className='song-list-detail'>
            <div className='song-baseinfo'>
                <BaseInfo data={songList?.playlist} />
            </div>
            <div className='song-content'>
                <Tabs defaultActiveKey='1' className='song-tabs'>
                    <TabPane tab='歌曲列表' key='1'>
                        <Musiclist data={songList?.playlist.tracks} />
                    </TabPane>
                    <TabPane tab='评论' key='2'>
                        <Comments
                          onChangePage={onChangePage}
                          total={songComment?.total} 
                          type={LickType.LIST}
                          moreHot={songComment?.moreHot}
                          comments={songComment?.comments}
                          hotComments={songComment?.hotComments}
                          more={songComment?.more} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
})

export default SongListDetail
