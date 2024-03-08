import { useState } from 'react'
import { PostsAPI } from '@/api'
import { Card, CardSkeleton } from '@/components'
import { Header, PostsList, SearchInput } from './styles'

export function Posts() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isLoading } = PostsAPI.usePosts(searchTerm, 500)

  if (error) return <p>Something went wrong.</p>

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const renderTotalPosts = (total?: number) => (
    <p>
      {total} {total === 1 ? 'post' : 'posts'}
    </p>
  )

  return (
    <section>
      <Header>
        <h2>Posts</h2>
        {renderTotalPosts(data?.total_count)}
        <label htmlFor="search" className="visually-hidden">
          Search for posts
        </label>
        <SearchInput
          id="search"
          type="text"
          placeholder="Search posts"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Header>

      <PostsList>
        {!isLoading && data?.items.length === 0 && <p>No posts found.</p>}
        {!isLoading &&
          data?.items.map((post) => {
            return (
              <Card
                key={post.id}
                title={post.title}
                content={post.body}
                date={post.created_at}
                issueNumber={post.number}
              />
            )
          })}
        {isLoading && (
          <>
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </PostsList>
    </section>
  )
}
