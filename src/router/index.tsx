import React from 'react'
import {
    Redirect,
} from 'react-router-dom'

import {
    CloudDownloadOutlined,
    CustomerServiceFilled,
} from '@ant-design/icons'

import Layout from 'antd/lib/layout/layout'
import Discover from '../views/Discover/index'
import NewSong from '../views/Discover/NewSong'
import Ranking from '../views/Discover/Ranking'
import Recommend from '../views/Discover/Recommend'
import Singer from '../views/Discover/Singer'
import SongList from '../views/Discover/SongList'
import Daily from '../views/Discover/Daily'

import SonglistDetail from '../views/SonglistDetail/index'

import Download from '../views/Download'
import Friend from '../views/Friend'
import Live from '../views/Live'
import LocalMusic from '../views/LocalMusic'
import PrivateFm from '../views/PrivateFm'
import Video from '../views/Video'

import NotFound from '../views/NotFound'

// 路由配置
export interface RouterConfig {
    path: string
    exact?: boolean
    component: any
    title: string
    Icon?: React.FC
    render?: ()=> React.ReactNode
    routes?: RouterConfig[]
}

export const menuPath = ['/discover/recommend', '/video', '/friend', '/live', '/privateFm', '/localMusic', '/download']

// 侧边栏显示的路由
export const menuRoutes: RouterConfig[] = [
    {
        path: '/discover',
        title: '发现音乐',
        component: Discover,
        routes: [
            {
                path: '/discover/recommend',
                title: '个性推荐',
                component: Recommend,
            },
            {
                path: '/discover/songlist',
                title: '歌单',
                component: SongList,
            }, {
                path: '/discover/recommend_daily',
                title: '每日歌曲推荐',
                component: Daily,
            }, {
                path: '/discover/ranking',
                title: '排行榜',
                component: Ranking,
            }, {
                path: '/discover/singer',
                title: '歌手',
                component: Singer,
            }, {
                path: '/discover/newsong',
                title: '最新音乐',
                component: NewSong,
            }],
    },
    {
        path: '/video',
        title: '视频',
        component: Video,
    },
    {
        path: '/friend',
        title: '朋友',
        component: Friend,
    },
    {
        path: '/live',
        title: '直播',
        component: Live,
    },
    {
        path: '/privateFm',
        title: '私人FM',
        component: PrivateFm,
    },
    {
        path: '/localMusic',
        title: '本地音乐',
        component: LocalMusic,
        Icon: CustomerServiceFilled,
    },
    {
        path: '/download',
        title: '我的下载',
        component: Download,
        Icon: CloudDownloadOutlined,
    },
]

const routes: RouterConfig[] = [
    {
        path: '/',
        exact: true,
        title: '首页',
        component: Layout,
        render: () => (<Redirect to='/discover' />),
    },
    ...menuRoutes,
    {
        path: '/songlists/:id',
        title: '推荐歌单',
        component: SonglistDetail,
    },
   {
       path: '*',
       title: '404',
       component: NotFound,
   },
]

export default routes
