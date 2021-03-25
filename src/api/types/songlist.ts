/* 歌单评论 */
export interface IsongComment {
  total?: number
  more?: boolean
  moreHot?: boolean
  type?: number
  comments?: Comments[] // 最新评论
  hotComments?: Comments[] // 精彩评论
  [propName: string]: any
}
export interface Comments {
  user: UserInfo
  content: string
  commentId: number
  time: number 
  likedCount: number
  beReplied: {
    beRepliedCommentId: number
    user: BeRepliedUser
    content: string
  }[] // 子评论
}

// 评论用户信息
export interface UserInfo {
  nickname: string
  userId: number
  avatarUrl: string
}

export interface BeRepliedUser{
  nickname: string
  beRepliedCommentId: number
  avatarUrl: string
}

/* 歌单开始 */
export interface ISonglist {
  adType: number
  backgroundCoverId: number
  cloudTrackCount: number
  commentCount: number
  coverImgUrl: string
  picUrl?: string
  createTime: number
  copywriter?: string
  creator: {
    avatarUrl: string
    nickname: string
    userId: number
  }
  description: string
  highQuality: boolean
  id: number
  name: string
  newImported: boolean
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  shareCount: number
  specialType: number
  status: number
  subscribed: boolean
  subscribedCount: number
  subscribers: []
  tags: string[]
  trackCount: number
  trackIds: []
  trackNumberUpdateTime: number
  trackUpdateTime: number
  tracks: Track[]
  updateTime: number
  userId: number
}
  
interface TrackId {
    id: number
    v: number
    t: number
    at: number
    alg?: any
}
  
export interface Track {
    name: string
    id: number
    pst: number
    t: number
    ar: Ar[]
    alia: any[]
    pop: number
    st: number
    rt: string
    fee: number
    v: number
    crbt?: any
    cf: string
    al: Al
    dt: number
    h: H
    m?: H
    l: H
    a?: any
    cd: string
    no: number
    rtUrl?: any
    ftype: number
    rtUrls: any[]
    djId: number
    copyright: number
    Sid: number
    mark: number
    originCoverType: number
    originSongSimpleData?: OriginSongSimpleDatum
    single: number
    noCopyrightRcmd?: any
    rtype: number
    rurl?: any
    mst: number
    cp: number
    mv: number
    publishTime: number
}
  
  interface OriginSongSimpleDatum {
    songId: number
    name: string
    artists: Artist[]
    albumMeta: Artist
  }
  
  interface Artist {
    id: number
    name: string
  }
  
  interface H {
    br: number
    fid: number
    size: number
    vd: number
  }
  
  interface Al {
    id: number
    name: string
    picUrl: string
    tns: any[]
    picStr: string
    pic: number
  }
  
  interface Ar {
    id: number
    name: string
    tns: any[]
    alias: any[]
  }

  /* 歌单结束 */
