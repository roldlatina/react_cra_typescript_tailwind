import { FC } from 'react'
import { useLogger } from '../../context/LoggerContext'
import { IPost, IUser } from '../../types/Post.Interface'

const namespace = 'PostDetails'

const PostDetails: FC<{ post?: IPost; user?: IUser }> = ({ post, user }) => {
  const { logger } = useLogger()
  logger(namespace)
  return (
    <div className='flex flex-row justify-between items-start'>
      <div className='text-lg font-bold capitalize'>{post?.title}</div>
      <div>{user?.name}</div>
    </div>
  )
}

export default PostDetails
