import React from 'react'
import {
    Redirect
} from 'react-router-dom'

import Discover from '../views/Discover/index'
import NewSong from '../views/Discover/NewSong'
import Ranking from '../views/Discover/Ranking'
import Recommend from '../views/Discover/Recommend'
import Singer from '../views/Discover/Singer'
import SongList from '../views/Discover/SongList'
import Tv from '../views/Discover/Tv'


import Download from '../views/Download'
import Friend from '../views/Friend'
import Live from '../views/Live'
import LocalMusic from '../views/LocalMusic'
import PrivateFm from '../views/PrivateFm'
import Video from '../views/Video'

import {
    CloudDownloadOutlined,
    CustomerServiceFilled
} from '@ant-design/icons'
import Layout from 'antd/lib/layout/layout'


// 路由配置
export interface RouterConfig {
    path: string
    exact?: boolean
    component: any
    title: string
    icon?: React.FC
    render?: any
    routes?: RouterConfig[]
}



const routes: RouterConfig[] = [
    {
        path: '/',
        exact: true,
        title: '首页',
        component: Layout,
        render: () => (< Redirect to="/discover" />)
    },
    {
        path: '/discover',
        title: '发现音乐',
        component: Discover,
        routes: [
            {
                path: '/discover/recommend',
                title: '个性推荐',
                exact: true,
                component: Recommend
            },
            {
                path: '/discover/songlist',
                title: '歌单',
                exact: true,
                component: SongList
            }, {
                path: '/discover/tv',
                title: '主播电台',
                exact: true,
                component: Tv
            }, {
                path: '/discover/ranking',
                title: '排行榜',
                exact: true,
                component: Ranking
            }, {
                path: '/discover/singer',
                title: '歌手',
                exact: true,
                component: Singer
            }, {
                path: '/discover/newsong',
                title: '最新音乐',
                exact: true,
                component: NewSong
            }]
    },
    {
        path: '/video',
        title: '视频',
        component: Video
    },
    {
        path: '/friend',
        title: '朋友',
        component: Friend
    },
    {
        path: '/live',
        title: '直播',
        component: Live
    },
    {
        path: '/privateFm',
        title: '私人FM',
        component: PrivateFm
    },
    {
        path: '/localMusic',
        title: '本地音乐',
        component: LocalMusic,
        icon: CustomerServiceFilled
    },
    {
        path: '/download',
        title: '我的下载',
        component: Download,
        icon: CloudDownloadOutlined
    },
]

export default routes