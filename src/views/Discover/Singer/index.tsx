import React, { memo } from 'react'

export default memo(function Singer(props) {
    return (
        <div>
            {props.children}
            歌手
        </div>
    )
})
