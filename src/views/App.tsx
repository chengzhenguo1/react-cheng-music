import React, { useCallback, useEffect } from 'react'
import { useAudio } from 'react-use'
import { observer } from 'mobx-react'
import { renderRoutes } from 'react-router-config'
import { HashRouter, Switch } from 'react-router-dom'
import { message } from 'antd'
import useStores from '../hooks/useStores'

import { MODE } from '../constants/play'
import { MusicType } from '../store/music'
import routes from '../router/index'
import Layout from '../components/Layout'

const App: React.FC = function App() {
    const { Music } = useStores()
    const {
 playMode, currentSong, playList,
} = Music
    const [audio, state, controls, ref] = useAudio({
        src: currentSong.url,
        autoPlay: true,
        onEnded: () => playNextMusic(),
        onPlay: () => setMusicHistoryList(),
        onError: () => { if (currentSong.musicId !== 0) { message.warning('无版权哦！') } },
      })

    const playNextMusic = useCallback(() => {
        switch (playMode) {
            /* 顺序播放 */
            case MODE.PLAY_IN_ORDER: {
                const idx = playList.findIndex(({ musicId }: MusicType) => musicId === currentSong.musicId)
                if (playList.length > 0) {
                  const nextIdx = idx > -1 ? (idx + 1) % playList.length : 0
                  Music.playListMusic(nextIdx)
                }
                return
            }
            /* 单曲循环 */
            case MODE.SINGLE_CYCLE: {
                controls.play()
                return
            }
            /* 随机播放 */
            case MODE.SHUFFLE_PLAYBACK: {
                if (playList.length) {
                    const randomIdx = Math.floor(Math.random() * playList?.length)
                    Music.playListMusic(randomIdx)
                }
                break
            }
            default:
        }
    }, [currentSong?.musicId, controls, ref, currentSong.url])

    /* 播放开始设置历史记录 */
    const setMusicHistoryList = useCallback(
        () => {
            Music.setHistory()
        },
        [ref, audio, currentSong],
    )

    useEffect(() => {
        Music.setPlayInfo(state, controls)
    }, [state, ref])

  return (
      <HashRouter>
          <Layout>
              {audio}
              <Switch>
                  {renderRoutes(routes, { routes })}
              </Switch>
          </Layout>
      </HashRouter>
  )
}

export default observer(App)
