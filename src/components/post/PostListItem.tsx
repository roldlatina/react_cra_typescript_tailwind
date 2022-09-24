import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useLogger } from '../../context/LoggerContext'
import useFetchComments from '../../hooks/useFetchComments'
import useFetchUser from '../../hooks/useFetchUser'
import { IPost } from '../../types/Post.Interface'
import Comments from '../comment/CommentList'
import PostDetails from './PostDetails'

const namespace = 'PostListItem'
const PostListItem: FC<{ post: IPost }> = ({ post }) => {
  const { logger } = useLogger()
  logger(namespace)

  const { user } = useFetchUser(post.userId)
  const { comments } = useFetchComments(post.id)

  return (
    <Link
      className='w-full border-black border rounded-lg p-4  hover:opacity-30 cursor-pointer'
      to={`/post/${post.id}`}>
      <PostDetails user={user} post={post} />
      <Comments comments={comments} />
    </Link>
  )
}

export default PostListItem
