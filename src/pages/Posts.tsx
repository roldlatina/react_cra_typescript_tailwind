import Loading from '../components/common/Loading'
import PostList from '../components/post/PostList'
import useFetchPosts from '../hooks/useFetchPosts'

const Posts = () => {
  const { posts, loading } = useFetchPosts()
  if (loading) return <Loading />

  return (
    <div className='p-4'>
      <PostList posts={posts} />
    </div>
  )
}

export default Posts
