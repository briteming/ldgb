import { PostCard, Grid } from '@/components'
import { ISearchResults } from './types'

export function SearchResults({ posts }: ISearchResults) {
  if (!posts) return null
  return (
    <Grid>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            date={post.created_at}
            issueNumber={post.number}
          />
        )
      })}
    </Grid>
  )
}
