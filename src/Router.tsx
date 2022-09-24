import { FC } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Post from './pages/Post'
import Posts from './pages/Posts'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/post/:id' element={<Post />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='*' element={<Navigate to='/posts' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
