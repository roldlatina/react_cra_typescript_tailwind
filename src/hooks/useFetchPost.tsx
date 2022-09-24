import { useCallback, useEffect, useState } from 'react'
import { API_URL } from '../constants/api'
import { IPost } from '../types/Post.Interface'

const useFetchPost = (id?: number | string) => {
  const [post, setPost] = useState<IPost>()
  const [loading, setLoading] = useState(false)

  const fetchPost = useCallback(() => {
    if (!id) return
    setLoading(true)
    fetch(`${API_URL}/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return {
    loading,
    post: post,
    refreshPost: fetchPost,
  }
}

export default useFetchPost
