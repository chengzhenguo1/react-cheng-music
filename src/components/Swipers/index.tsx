import React, { memo } from 'react'

import './index.less'

import { Carousel, Image, Spin } from 'antd'
import { IBanner } from '../../api/types/recomment'

interface SwiperProps {
    banners?: IBanner[]
}

const Swipers: React.FC<SwiperProps> = memo(({ banners }) => (
    <div className='swipers'>
        <Carousel>
            {
                banners?.map((item) => (
                    <div className='swiper-card' key={item.targetId}>
                        <Image preview={false} src={item.pic} title={item.typeTitle} width='100%' placeholder={<Spin />} />
                        <i style={{ backgroundColor: item.titleColor }}>
                            {item.typeTitle}
                            1
                        </i>
                    </div>
                ))
      }
        </Carousel>
    </div>
))

export default Swipers
