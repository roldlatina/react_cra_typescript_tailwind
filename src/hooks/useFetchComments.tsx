import { useCallback, useEffect, useState } from 'react'
import { API_URL } from '../constants/api'
import { IComment } from '../types/Post.Interface'

const useFetchComments = (postId?: number | string) => {
  const [comments, setComments] = useState<Array<IComment>>()
  const [loading, setLoading] = useState(false)

  const fetchComments = useCallback(() => {
    if (!postId) return
    setLoading(true)
    fetch(`${API_URL}/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((json) => setComments(json))
      .finally(() => setLoading(false))
  }, [postId])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  return {
    loading,
    comments: comments || [],
    refreshComments: fetchComments,
  }
}

export default useFetchComments
