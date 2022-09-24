import { useCallback, useEffect, useState } from 'react'
import { API_URL } from '../constants/api'
import { IUser } from '../types/Post.Interface'

const useFetchUser = (id?: number) => {
  const [user, setUser] = useState<IUser>()
  const [loading, setLoading] = useState(false)

  const fetchUser = useCallback(() => {
    if (!id) return
    setLoading(true)
    fetch(`${API_URL}/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json))
      .finally(() => setLoading(false))
  }, [id])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return {
    loading,
    user: user,
    refreshUser: fetchUser,
  }
}

export default useFetchUser
