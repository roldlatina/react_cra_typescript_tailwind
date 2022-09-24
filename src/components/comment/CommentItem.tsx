import { FC } from 'react'
import { useLogger } from '../../context/LoggerContext'
import { IComment } from '../../types/Post.Interface'

const namespace = 'CommentItem'

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
  const { logger } = useLogger()
  logger(namespace)

  return (
    <li>
      <div>{comment.name}</div>
      <div>{comment.body}</div>
    </li>
  )
}

export default CommentItem
