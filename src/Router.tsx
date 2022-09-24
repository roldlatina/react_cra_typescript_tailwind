import { FC } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Post from './pages/Post'
import Posts from './pages/Posts'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/posts' element={<Posts />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
