import axios from '../utils/axios'

import { ISongList, IsongComment } from './types/songlist'

type GetSongListFn = (id:string) => Promise<ISongList>
type GetSongCommentFn = (id:string, page?:number, limit?:number) => Promise<IsongComment>

/* 获取歌单列表 */
const getSongList:GetSongListFn = async (id) => {
    const res = await axios({
        url: '/playlist/detail',
        params: {
            id,
        },
    })
    return res
}

/* 获取歌单评论 */
const getSongComment:GetSongCommentFn = async (id, page = 0, limit = 20) => {
    const res = await axios({
        url: 'comment/playlist',
        params: {
            id,
            limit,
            offset: page * limit,
        },
    })
    return res
}

export default {
    getSongList,
    getSongComment,
}
