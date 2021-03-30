import React, { memo, useEffect } from 'react'
import { useAsyncFn } from 'react-use'

import { Skeleton } from 'antd'
import recommentApi from '~/api/recomment'
import songListApi from '~/api/songlist'
import Title from '~/components/Title/index'
import SwiperList from '~/components/Swipers/index'
import NewMusicList from '~/components/NewMusicList'
import List from './List'
import './index.less'

const Recommend: React.FC = memo(() => {
    const [banners, getBannersFn] = useAsyncFn(recommentApi.getBanners)
    const [newSongs, getNewSongsFn] = useAsyncFn(songListApi.getNewSongList)

    useEffect(() => {
        getBannersFn()
        getNewSongsFn()
    }, [])

    return (
        <div className='recommend'>
            {/* 轮播图 */}
            <>
                {
                banners.loading ? <Skeleton /> : <SwiperList banners={banners.value} />
                }
            </>
            {/* 推荐歌单 */}
            <List />
            {/* 最新音乐 */}
            <>
                <Title type='link' text='最新音乐' />
                {
                newSongs.loading ? <Skeleton /> : <NewMusicList data={newSongs.value?.slice(0, 12)} />
            }
            </>
            <>
                <Title type='link' text='推荐MV' />
                {
                newSongs.loading ? <Skeleton /> : <NewMusicList data={newSongs.value?.slice(0, 12)} />
            }
            </>
        </div>
    )
})

export default Recommend
