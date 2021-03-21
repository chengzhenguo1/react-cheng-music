import axios from '../utils/axios'

import { IBanner, IRecommendList } from './types/recomment'

type GetBannersFn = () => Promise<IBanner[]>
type GetRecommendList = ()=> Promise<IRecommendList[]>

const getBanners: GetBannersFn = async () => {
    const res = await axios({
        url: '/banner',
        params: {
            type: 1,
        },
    })
    return res.banners
}

const getRecommentList: GetRecommendList = async () => {
    const res = await axios({
        url: '/personalized',
        params: {
            limit: 10,
        },
    })
    return res.result
}

export default {
    getBanners,
    getRecommentList,
}
