// user/user.ts
import { makeAutoObservable, toJS } from 'mobx'
import { MODE } from '../../constants/play'
import { parseMusicUrl } from '../../utils/parseUrl'

export interface MusicType {
    musicId: number
    url: string
    authorInfo: AuthorType
}

export interface AuthorType {
    picUrl:string
    id:number
    name:string
    author:string
}

const initAuthor = {
    picUrl: '',
    id: 0,
    name: '',
    author: '',
}

class Music {
    // 歌词的显示与隐藏
    showLyrics = false
    // 
    controls:any = null
    // 当前播放歌曲
    currentSong: MusicType = {
        musicId: 0,
        url: '', 
        authorInfo: initAuthor,
    }
    // 歌曲信息
    audioInfo = {
        duration: 0,
        muted: false,
        paused: true,
        time: true,
    }
    // 播放模式
    playMode: MODE = MODE.PLAY_IN_ORDER
    // 播放列表
    playList: MusicType[] = []
    // 播放历史记录
    HistoryList: MusicType[] = []

    constructor() {
        makeAutoObservable(this)
    }
    // 设置正在播放的歌曲
    playMusic(musicId: number, authorInfo:AuthorType):void {
        this.currentSong.musicId = musicId
        this.currentSong.url = parseMusicUrl(musicId)
        this.currentSong.authorInfo = authorInfo
        this.setPlayList(toJS(this.currentSong))
    }
    /* 播放列表的歌曲 */
    playListMusic(index:number): void {
        this.currentSong.musicId = this.playList[index].musicId
        this.currentSong.url = this.playList[index].url
        this.currentSong.authorInfo = this.playList[index].authorInfo
    }
    /* 暂停--播放 */
    setMusicState(flag:boolean):void {
        if (flag) {
            this.controls?.play()
        } else {
            this.controls?.pause()
        }
    }
    // 播放列表设置
    setPlayList(data:any):void {
        /* 查看列表中是否有当前歌曲 */
        const index = this.playList?.findIndex((item) => item.musicId === data.musicId)
        if (index === -1) {
           this.playList = this.playList.concat(data)
        }
    }
    // 切换播放类型
    setPlayMode(type:MODE): void {
        console.log(type)
        this.playMode = type
    }
    // 设置播放信息
    setPlayInfo(info:any, controls: any):void {
        this.audioInfo = info
        this.controls = controls
    }
    // 设置播放进度
    setPlayProgress(timer: number):void {
        this.controls?.seek(timer)
    }
    // 设置播放音量
    setPlayVolume(value:number):void {
        this.controls?.volume(value)
    }
    // 清空播放列表
    clearPlayList():void {
        this.playList = []
    }
    // 设置歌词页面的显示和隐藏
    setLyricsShow(flag:boolean):void {
        this.showLyrics = flag
    }
}

export default Music
