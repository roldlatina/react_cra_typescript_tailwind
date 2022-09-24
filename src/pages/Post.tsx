import { useParams } from 'react-router-dom'
import Comments from '../components/comment/CommentList'
import Loading from '../components/common/Loading'
import PostDetails from '../components/post/PostDetails'
import useFetchComments from '../hooks/useFetchComments'
import useFetchPost from '../hooks/useFetchPost'
import useFetchUser from '../hooks/useFetchUser'

const Post = () => {
  const { id } = useParams()
  const { post, loading: isPostLoading } = useFetchPost(id)
  const { user, loading: isUserLoading } = useFetchUser(post?.userId)
  const { comments, loading: isCommentsLoading } = useFetchComments(id)

  if (isPostLoading || isUserLoading || isCommentsLoading) return <Loading />
  return (
    <div className='p-10'>
      <PostDetails user={user} post={post} />
      <Comments comments={comments} />
    </div>
  )
}

export default Post
