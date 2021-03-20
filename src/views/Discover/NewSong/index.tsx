import React, { memo } from 'react'

export default memo((props) => {
    console.log(props)
    console.log(props.children)
    return (
        <div>
            最新歌单
        </div>
    )
})
