import React, { memo } from 'react'

export default memo(function Ranking(props) {
    return (
        <div>
            {props.children}
            排行榜
        </div>
    )
})
