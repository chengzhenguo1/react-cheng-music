import React, { memo } from 'react'

import { useAsync } from 'react-use'

import { Row, Col } from 'antd'
import recommentApi from '../../../../api/recomment'
import Cover from '../../../../components/Cover/index'

const SongList: React.FC = memo(() => {
    const { value: recommentData } = useAsync(recommentApi.getRecommentList)
    console.log(recommentData)
    return (
        <div className='cover'>
            {
                recommentData?.map((item) => (
                    <div className='cover-card' key={item.id}>
                        <Cover path='songlists' pid={item.id} name={item.name} picUrl={item.picUrl} playCount={item.playCount} />
                    </div>
                    ))
            }
        </div>
)
 })

export default SongList
