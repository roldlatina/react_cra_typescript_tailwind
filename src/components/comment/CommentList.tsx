import { FC } from 'react'
import { useLogger } from '../../context/LoggerContext'
import { IComment } from '../../types/Post.Interface'
import CommentItem from './CommentItem'

const namespace = 'CommentItem'

const CommentList: FC<{ comments: Array<IComment> }> = ({ comments }) => {
  const { logger } = useLogger()
  logger(namespace)

  if (comments.length === 0) return null
  return (
    <div>
      <div className='mt-3 font-semibold'>Comments:</div>
      <ul>
        {comments?.map((comment: IComment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </ul>
    </div>
  )
}

export default CommentList
