import axios from '../utils/axios'

import { IBanner, IRecommendList } from './types/recomment'

type GetBannersFn = () => Promise<IBanner[]>
type GetRecommendListFn = ()=> Promise<IRecommendList[]>
type SetLikeFn = (id:number, type:number, t: 1|0)=> Promise<any[]>

const getBanners: GetBannersFn = async () => {
    const res = await axios({
        url: '/banner',
        params: {
            type: 1,
        },
    })
    return res.banners
}

const getRecommentList: GetRecommendListFn = async () => {
    const res = await axios({
        url: '/personalized',
        params: {
            limit: 10,
        },
    })
    return res.result
}

// 点赞
// eslint-disable-next-line no-shadow
export enum LickType {
    SONG = 0,
    MV = 1,
    LIST = 2,
    ALBUM = 3,
    TV = 4,
    MOVIE = 5,
    DYNAMIC =6
}

const setCommentLike:SetLikeFn = async (cid:number, type = 2, t: 1|0) => {
    const res = await axios({
        url: '/comment/like',
        params: {
            cid,
            type,
            t,
        },
    })
    return res
}

export default {
    getBanners,
    getRecommentList,
    setCommentLike,
}
