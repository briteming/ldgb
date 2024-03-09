import { useState } from 'react'
import { PostsAPI } from '@/api'
import { Search } from './Search'
import { Results } from './Results'
import { Skeleton } from './Skeleton'

export function Posts() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isLoading } = PostsAPI.useDebouncedPosts(searchTerm, 500)

  if (error) return <p>Something went wrong.</p>

  const posts = data?.items
  const totalPosts = data?.total_count

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <section>
      <Search
        searchTerm={searchTerm}
        totalPosts={totalPosts}
        onSearchChange={handleSearchChange}
      />

      {!isLoading && totalPosts === 0 && <p>No posts found.</p>}
      {!isLoading && <Results posts={posts} />}
      {isLoading && <Skeleton />}
    </section>
  )
}
