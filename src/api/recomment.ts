import axios from '../utils/axios'

import { IBanner } from './types/recomment'

type GetBannersFn = () => Promise<IBanner[]>


export const getBanners: GetBannersFn = async () => {
    const res = await axios({
        url: '/banner',
        params: {
            type: 1
        }
    })
    return res.banners
}