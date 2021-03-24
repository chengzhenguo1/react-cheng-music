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
export interface ISongList {
    code: number
    relatedVideos?: any
    playlist: Playlist
    urls?: any
    privileges: any[]
}

export interface Playlist {
    id: number
    name: string
    coverImgId: number
    coverImgUrl: string
    coverImgIdStr: string
    adType: number
    userId: number
    createTime: number
    status: number
    opRecommend: boolean
    highQuality: boolean
    newImported: boolean
    updateTime: number
    trackCount: number
    specialType: number
    privacy: number
    trackUpdateTime: number
    commentThreadId: string
    playCount: number
    trackNumberUpdateTime: number
    subscribedCount: number
    cloudTrackCount: number
    ordered: boolean
    description: string
    tags: string[]
    updateFrequency?: any
    backgroundCoverId: number
    backgroundCoverUrl?: any
    titleImage: number
    titleImageUrl?: any
    englishTitle?: any
    subscribers: Subscriber[]
    subscribed?: any
    creator: Subscriber
    tracks: Track[]
    videoIds?: any
    videos?: any
    trackIds: TrackId[]
    shareCount: number
    commentCount: number
    remixVideo?: any
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
  
  interface Subscriber {
    defaultAvatar: boolean
    province: number
    authStatus: number
    followed: boolean
    avatarUrl: string
    accountStatus: number
    gender: number
    city: number
    birthday: number
    userId: number
    userType: number
    nickname: string
    signature: string
    description: string
    detailDescription: string
    avatarImgId: number
    backgroundImgId: number
    backgroundUrl: string
    authority: number
    mutual: boolean
    expertTags?: any
    experts?: any
    djStatus: number
    vipType: number
    remarkName?: any
    authenticationTypes: number
    avatarDetail?: any
    anchor: boolean
    avatarImgIdStr: string
    backgroundImgIdStr: string
  }

  /* 歌单结束 */
