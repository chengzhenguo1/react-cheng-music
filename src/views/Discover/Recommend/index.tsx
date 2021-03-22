import React, { memo } from 'react'
import { useAsync } from 'react-use'

import recommentApi from '../../../api/recomment'

import SwiperList from '../../../components/Swipers/index'
import SongList from './SongList'

const Recommend: React.FC = memo(() => {
    const { value: bannerList } = useAsync(recommentApi.getBanners)
    return (
        <div>
            {/* 轮播图 */}
            <SwiperList banners={bannerList} />
            {/* 推荐歌单 */}
            <SongList />
        </div>
    )
})

export default Recommend
