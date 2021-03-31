import { searchCount } from '~/constants/pageCount'
import axios from '~/utils/axios'
import { ISearchHot, SearchType } from './types/search'
import {
 IMusic, IArtist, IAlbum, ISonglist, UserInfo,
} from './types/songlist'

type GetSearchHotFn = ()=> Promise<ISearchHot[]>
type GetSearchResultFn = (keywords: string, type?:SearchType, limit?:number, offset?:number)=> Promise<any>

/* 获取热门搜索列表 */
const getSearchHot: GetSearchHotFn = async () => {
    const res = await axios({
        url: '/search/hot',
    })
    return res.result.hots
}

/* 获取搜索结果 */
const getSerachResult: GetSearchResultFn = async (keywords: string, type?:SearchType, limit = searchCount, offset = 0) => {
    const res = await axios({
        url: '/search',
        params: {
            keywords,
            type,
            limit,
            offset,
        },
    })
    return res.result
}

export default {
    getSearchHot,
    getSerachResult,
}
