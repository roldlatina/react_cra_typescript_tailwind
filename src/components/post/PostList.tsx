import { FC, useMemo, useState } from 'react'
import { useLogger } from '../../context/LoggerContext'
import { IPost } from '../../types/Post.Interface'
import SearchInput from '../common/SearchInput'
import PostListItem from './PostListItem'

const namespace = 'PostList'

const PostList: FC<{ posts: Array<IPost> }> = ({ posts }) => {
  const { logger } = useLogger()
  logger(namespace)
  const [searchString, setSearchString] = useState<string>('')

  const filteredList = useMemo(
    () =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchString.toLowerCase()),
      ),
    [posts, searchString],
  )

  return (
    <div>
      <div className='text-lg font-bold'>Posts:</div>
      <SearchInput onChange={setSearchString} value={searchString} />
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
        {filteredList?.map((post: IPost) => (
          <PostListItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default PostList
