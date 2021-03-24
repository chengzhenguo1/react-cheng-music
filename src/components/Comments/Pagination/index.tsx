import React, { memo, useCallback } from 'react'

import { Pagination as AntdPagination } from 'antd'
import './index.less'

interface IProps{
    total?: number
    OnchangePageFn: (page:number)=>void
}

const Pagination: React.FC<IProps> = memo(({ total = 0, OnchangePageFn }) => {
    const changePage = useCallback(
        (e:number) => {
            OnchangePageFn(e)
        },
        [],
    )

    return (
        <div className='pagination'>
            <AntdPagination 
              defaultCurrent={1} 
              total={total - (total % 30)} 
              defaultPageSize={20} 
              onChange={changePage} 
              showSizeChanger={false} 
              hideOnSinglePage />
        </div>
)
 })

export default Pagination
