import React, { memo, useEffect, useState } from 'react'

import SwiperList from '../../../components/Swipers/index'

import { getBanners } from '../../../api/recomment'
import { IBanner } from '../../../api/types/recomment'

const Recommend: React.FC = memo(() => {
    const [bannerList, setbannerList] = useState<IBanner[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await getBanners()
            console.log(res)
            setbannerList(res)
        }
        fetchData()
    }, [])

    return (
        <div>
            <SwiperList banners={bannerList} />
        </div>
    )
})

export default Recommend
