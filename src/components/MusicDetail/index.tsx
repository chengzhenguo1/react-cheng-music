import React, { useEffect, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'
import { useAsyncFn } from 'react-use'
import { Image } from 'antd'
import useStores from '~/hooks/useStores'

import commentApi from '~/api/comment'
import songlistApi from '~/api/songlist'
import { LickType } from '~/api/types/comment'
import Lyric from './Lyric'
import Comments from '../Comments'
import { formatLyric } from '~/utils/format'
import playBar from '~/assets/image/play-bar.png'
import playCd from '~/assets/image/play-cd.png'
import './index.less'

const MusicDetail: React.FC = () => {
    const { Music } = useStores()
    const { currentSong, showLyrics, audioInfo } = Music
    const [lyric, getLyricFn] = useAsyncFn(songlistApi.getLyric)
    const [{ value: commentData = [] }, getCommentFn] = useAsyncFn(commentApi.getSongComment)
    
    useEffect(() => {
        getLyricFn(currentSong.musicId)
        getCommentFn(currentSong.musicId)
    }, [currentSong.musicId])

    const onUpDateCidLiked = useCallback((index:number, liked:boolean, hot:boolean) => {
        const type = hot ? 'hotComments' : 'comments'
        const isAdd = liked ? 1 : -1
        console.log(index)
        commentData[type][index].likedCount += isAdd
        commentData[type][index].liked = liked
        commentData[type] = [...commentData[type]]
    }, [currentSong.musicId, commentData])

    const onChangePage = useCallback(
        (page:number) => {
            getCommentFn(currentSong.musicId, page)
        },
        [currentSong.musicId],
    )
    
    return (
        <div className={cn('music-detail', showLyrics && 'detail-show')}>
            <div className='detail-cover'>
                <div className='detail-header'>
                    <div className='detail-h-wrap'>
                        <div className='cd-bar'>
                            <Image className='play-cd' src={playCd} preview={false} />
                            <Image className={cn('play-bar', !audioInfo.paused && 'play')} src={playBar} preview={false} />
                        </div>
                        <div className='detail-h-circle'>
                            <div className={cn('circle-cover', !audioInfo.paused && 'play')}>
                                <Image src={`${currentSong.authorInfo.picUrl}?params=190y190`} preview={false} />
                            </div>
                        </div>
                    </div>
                    <div className='detail-lyric'>
                        <Lyric 
                          title={currentSong.authorInfo.name} 
                          artist={currentSong.authorInfo.author}
                          time={audioInfo.time}
                          lines={formatLyric(lyric?.value?.lrc?.lyric)}
                          paused={audioInfo.paused} />
                    </div>
                </div>
                <div className='detail-info'>
                    <Comments
                      onChangePage={onChangePage}
                      onUpDateCidLiked={onUpDateCidLiked}
                      total={commentData?.total} 
                      type={LickType.SONG}
                      id={currentSong?.musicId}
                      moreHot={commentData?.moreHot}
                      comments={commentData?.comments}
                      hotComments={commentData?.hotComments}
                      more={commentData?.more} />
                </div>
            </div>
        </div>
    )
 }

export default observer(MusicDetail)
