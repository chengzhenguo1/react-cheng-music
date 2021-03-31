import React, { memo, useState, useEffect } from 'react'
import { useAsyncFn } from 'react-use'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import serachApi from '~/api/search'
import HotItem from './HotItem'
import './index.less'

 const SearchPut = memo(() => {
    const [visible, setVisible] = useState(false)
    const [hotList, getSearchHotList] = useAsyncFn(serachApi.getSearchHot)
    
    useEffect(() => {
        getSearchHotList()
    }, [])

    const showDrawer = () => {
        setVisible(true)
    }

    return (
        <div className='search-box'>
            <Input 
              placeholder='搜索' 
              className='search-input'
              prefix={<SearchOutlined />}
              onClick={showDrawer} />
            <div className='search-block'>
                <div className='search-history'>
                    <div className='search-title'>搜索历史</div>
                </div>
                <div className='search-hot'>
                    <div className='search-title'>热搜榜</div>
                    <div className='serach-word'>
                        {!hotList.loading && hotList.value?.map(({ first }, index) => (
                            <HotItem 
                              key={first}
                              index={index + 1} 
                              name={first} />
                         ))}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default SearchPut
