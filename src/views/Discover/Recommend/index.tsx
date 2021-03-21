import React, { memo } from 'react'
import { useAsync } from 'react-use'

import recommentApi from '../../../api/recomment'

import SwiperList from '../../../components/Swipers/index'
import PlayList from './PlayList/index'
import SongList from './SongList'

const Recommend: React.FC = memo(() => {
    const { value: bannerList } = useAsync(recommentApi.getBanners)
    return (
        <div>
            <SwiperList banners={bannerList} />
            <PlayList />
            <SongList />
        </div>
    )
})

export default Recommend
