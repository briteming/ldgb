import { useState } from 'react'
import { PostsAPI } from '@/api'
import {
  Profile,
  SearchBar,
  SearchResults,
  SearchResultsSkeleton,
} from '@/components'

export function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isLoading } = PostsAPI.useDebouncedPosts(searchTerm, 500)

  if (error) return <p>Something went wrong.</p>

  const posts = data?.items
  const totalPosts = data?.total_count

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <Profile />
      <section>
        <SearchBar
          searchTerm={searchTerm}
          totalPosts={totalPosts}
          onSearchChange={handleSearchChange}
        />

        {!isLoading && totalPosts === 0 && <p>No posts found.</p>}
        {!isLoading && <SearchResults posts={posts} />}
        {isLoading && <SearchResultsSkeleton />}
      </section>
    </>
  )
}
