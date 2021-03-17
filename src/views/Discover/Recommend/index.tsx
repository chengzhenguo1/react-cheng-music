import React, { memo } from 'react'

export default memo(function Recommend(props) {
    console.log(props)
    return (
        <div>
            {props.children}
            个性推荐个性推荐个性推荐个性推荐个性推荐个性推荐个性推荐个性推荐个性推荐个性推荐
        </div>
    )
})
