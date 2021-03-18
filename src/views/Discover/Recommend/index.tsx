import React, { memo, useEffect, useState } from 'react'

import SwiperList from '../../../components/Swipers/index'

import { getBanners } from '../../../api/recomment'
import { IBanner } from '../../../api/types/recomment'


export default memo(function Recommend() {
    const [bannerList, setbannerList] = useState<IBanner[] | null>()

    useEffect(() => {
        const fetchData = async () => {
            const res = await getBanners()
            console.log(res)
            setbannerList(res)
        };
        fetchData()
    }, [])

    return (
        <div>
            <SwiperList banners={bannerList ? bannerList : []} />
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>2</p>
        </div>
    )
})
