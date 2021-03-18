import React, { memo, useEffect, useState } from 'react'

import './index.less'

import { Carousel, Image } from 'antd'
import { IBanner } from '../../api/types/recomment'

interface SwiperProps {
    banners: IBanner[]
}

const Swipers: React.FC<SwiperProps> = memo(function Swipers({ banners }) {
    return (
        <div className='swipers'>
            <Carousel autoplay>
                {
                    banners?.length > 0 && banners.map(item => (
                        <Image preview={false} src={item.pic} key={item.targetId} title={item.typeTitle} width={'80%'} />
                    ))
                }
            </Carousel>
        </div>
    )
})

export default Swipers