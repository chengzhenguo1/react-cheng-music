import axios from '../utils/axios'

import { ISongList } from './types/songlist'

type GetSongListFn = (id:string) => Promise<ISongList>
type GetSongCommentFn = (id:string) => Promise<ISongList>

const getSongList:GetSongListFn = (id) => {
    const res = axios({
        url: '/playlist/detail',
        params: {
            id,
        },
    })
    return res
}

/* const getSongComment:GetSongCommentFn = (id) => {

} */

export default {
    getSongList,
}
