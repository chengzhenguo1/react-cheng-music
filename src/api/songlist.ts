import axios from '../utils/axios'

import { ISonglist, IsongComment } from './types/songlist'

type GetSongListFn = (id:string) => Promise<ISonglist>
type GetSongCommentFn = (id:string, page?:number, limit?:number) => Promise<IsongComment>
type GetUserSonglistFn = (uid:number) => Promise<{create: ISonglist[]; collect: ISonglist[] }>

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
        url: '/comment/playlist',
        params: {
            id,
            limit,
            offset: page * limit,
        },
    })
    return res
}

const getUserSonglist: GetUserSonglistFn = async (uid) => {
    const res = await axios({
        url: '/user/playlist',
        params: {
            uid,
            limit: 100,
        },
    })

    const playlist: ISonglist[] = res.playlist || []

    /* 我的歌单 */
    const create = playlist.filter(({ creator }) => uid === creator.userId)
    /* 收藏的歌单 */
    const collect = playlist.filter(({ creator }) => uid !== creator.userId)

    return {
        create,
        collect,
    }
}

export default {
    getSongList,
    getSongComment,
    getUserSonglist,
}
