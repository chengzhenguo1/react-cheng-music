import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'

import './index.less'

interface IProps{
    name: string
    index: number
}

const HotItem: React.FC<IProps> = memo(({ name, index }) => {
    const { push } = useHistory()

    const toSearchPath = () => {
        push(`/search/${name}`)
    }

    return (
        <div className='hot-item' onClick={toSearchPath}>
            <div className='item-index'>
                {index}
            </div>
            <div className='item-name'>
                {name}
            </div>
        </div>
)
 })

export default HotItem
