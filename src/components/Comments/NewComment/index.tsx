import React, { memo } from 'react'
import { useAsyncFn } from 'react-use'

import recommentApi from '../../../api/recomment'
import { Comments } from '../../../api/types/songlist'
import List from '../List'
import Pagination from '../Pagination'

interface IProps {
    total?: number
    comments?: Comments[],
    more?: boolean
    type?: number
    onChangePage: any
}

const NewComment: React.FC<IProps> = memo(({
 total, comments, more, type, onChangePage,
}) => {
        const [state, onLike] = useAsyncFn(async (cid:number) => {
          const res = await recommentApi.setCommentLike(cid, type = 2, 0)
          return res
        }, [])

        /* 改变页码 */
    const OnchangePageFn = (page:number) => {
        onChangePage(page)
    }
       
     return (
         <div>
             <div className='comment-title'>
                 最新评论
                 {`(${total})`}
             </div>
             <List comments={comments} onLike={onLike} />
             <Pagination total={total} OnchangePageFn={OnchangePageFn} />
         </div>
)
 })

export default NewComment
