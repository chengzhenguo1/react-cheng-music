import React, { memo } from 'react'

export default memo(function NewSong(props) {
    console.log(props)
    console.log(props.children)
    return (
        <div>
            最新音乐
            {props.children}
        </div>
    )
})
