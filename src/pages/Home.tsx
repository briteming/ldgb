import { useState } from 'react'
import { PostsAPI } from '@/api'
import {
  ErrorMessage,
  Profile,
  SearchBar,
  SearchResults,
  SearchResultsSkeleton,
} from '@/components'

export function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isLoading } = PostsAPI.useDebouncedPosts(searchTerm, 500)

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

        {!isLoading && !error && totalPosts === 0 && <p>No posts found.</p>}
        {!isLoading && !error && <SearchResults posts={posts} />}
        {isLoading && !error && <SearchResultsSkeleton />}
        {!isLoading && !!error && (
          <ErrorMessage>
            Sorry, we couldn't load the posts at the moment. Please try again
            later.
          </ErrorMessage>
        )}
      </section>
    </>
  )
}
