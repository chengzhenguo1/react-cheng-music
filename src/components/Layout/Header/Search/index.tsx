import React, { memo } from 'react'

import './index.less'

import { Input } from 'antd'
import { ZoomInOutlined } from '@ant-design/icons'

 const Search = memo(() => (
     <div className='serach'>
         <Input placeholder='搜索' className='serach-put' prefix={<ZoomInOutlined />} />
     </div>
    ))

export default Search
