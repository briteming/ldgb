import { PostCardSkeleton, Grid } from '@/components'

export function SearchResultsSkeleton() {
  return (
    <Grid>
      <PostCardSkeleton />
      <PostCardSkeleton />
    </Grid>
  )
}
