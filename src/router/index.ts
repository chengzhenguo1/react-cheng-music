import React from 'react'
import Discover from '../views/Discover'
import Download from '../views/Download'
import Friend from '../views/Friend'
import Live from '../views/Live'
import LocalMusic from '../views/LocalMusic'
import PrivateFm from '../views/PrivateFm'
import Video from '../views/Video'

import { CloudDownloadOutlined,CustomerServiceFilled } from '@ant-design/icons'


// 路由配置
interface RouterConfig {
    path: string
    exact?: boolean
    component: React.FC
    title?: string
    icon?: React.FC
}



const routes: RouterConfig[] = [
    {
        path: '/',
        exact: true,
        title: '发现音乐',
        component: Discover
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
        path: '/download',
        title: '我的下载',
        component: Download,
        icon: CloudDownloadOutlined
    },
    {
        path: '/localMusic',
        title: '本地音乐',
        component: LocalMusic,
        icon: CustomerServiceFilled
    },
]

export default routes