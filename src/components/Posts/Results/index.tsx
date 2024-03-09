import { Card, Grid } from '@/components'
import { IResults } from './types'

export function Results({ posts }: IResults) {
  if (!posts) return null
  return (
    <Grid>
      {posts.map((post) => {
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
    </Grid>
  )
}
