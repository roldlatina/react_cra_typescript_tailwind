import { useEffect, useState } from 'react'
import { API_URL } from '../constants/api'
import { IPost } from '../types/Post.Interface'

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Array<IPost>>()
  const [loading, setLoading] = useState(false)

  const fetchPosts = () => {
    setLoading(true)
    fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return {
    loading,
    posts: posts || [],
    refreshPosts: fetchPosts,
  }
}

export default useFetchPosts
