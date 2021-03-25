import React, { memo, useEffect } from 'react'
import { useAsyncFn } from 'react-use'

import { Skeleton } from 'antd'
import recommentApi from '../../../api/recomment'

import SwiperList from '../../../components/Swipers/index'
import List from './List'

const Recommend: React.FC = memo(() => {
    const [state, getBannersFn] = useAsyncFn(recommentApi.getBanners)

    useEffect(() => {
        getBannersFn()
    }, [])

    return (
        <div>
            {/* 轮播图 */}
            {
                state.loading ? <Skeleton /> : <SwiperList banners={state.value} />
            }
            {/* 推荐歌单 */}
            <List />
        </div>
    )
})

export default Recommend
