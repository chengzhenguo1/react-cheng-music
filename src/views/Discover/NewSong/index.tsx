import React, { memo } from 'react'
import routes from '../../router/index'
import { renderRoutes } from 'react-router-config'
import Discover from '../index'


export default memo(function NewSong(props) {
    console.log(props)
    console.log(props.children)
    return (
        <div>
            最新歌单
        </div>
    )
})
