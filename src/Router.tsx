import { Route, Routes } from 'react-router-dom'
import { Home, Post, NotFound } from '@/pages'
import { DefaultLayout } from '@/layouts'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:issueNumber" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
