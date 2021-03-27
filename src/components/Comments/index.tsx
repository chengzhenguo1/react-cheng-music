import React, { memo } from 'react'

import { Result } from 'antd'
import GodComment from './GodComment'
import NewComment from './NewComment'
import { IsongComment } from '~/api/types/songlist'
import './index.less'

const Comment: React.FC<IsongComment> = memo((data) => (
    <div>
        {data?.hotComments?.length > 0 
            && (
            <GodComment 
              hotComments={data?.hotComments} 
              moreHot={data?.moreHot} />
            )}
        {data?.comments?.length > 0 && (
            <NewComment 
              total={data?.total} 
              more={data?.more} 
              comments={data?.comments} 
              type={data?.type} 
              onChangePage={data.onChangePage} />
            )}
        {data?.comments?.length < 1 && data?.comments?.length < 1 && <Result status='warning' title='暂无数据' />}
    </div>
))

export default Comment
