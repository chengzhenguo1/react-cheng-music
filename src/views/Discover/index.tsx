import React, { memo } from 'react'



export default memo(function index() {
    function changeColor() {

    }
    return (
        <div>
            <button onClick={changeColor}>切换颜色</button>
        </div>
    )
})
