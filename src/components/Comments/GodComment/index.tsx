import React, { memo, useCallback } from 'react'
import { useAsyncFn } from 'react-use'

import recommentApi from '../../../api/recomment'
import { Comments } from '../../../api/types/songlist'
import List from '../List'

interface IProps {
    total?: number
    hotComments?: Comments[],
    moreHot?: boolean
}

const GodComment: React.FC<IProps> = memo(({
 total, hotComments, moreHot, type,
}) => {
        const [state, onLike] = useAsyncFn(async (cid:number) => {
          const res = await recommentApi.setCommentLike(cid, type = 2, 0)
          console.log(state)
          return res
        }, [])
       
     return (
         <div>
             <div className='comment-title'>
                 精彩评论
             </div>
             <List comments={hotComments} onLike={onLike} />
         </div>
)
 })

export default GodComment
