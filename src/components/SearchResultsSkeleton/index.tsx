import { CardSkeleton, Grid } from '@/components'

export function SearchResultsSkeleton() {
  return (
    <Grid>
      <CardSkeleton />
      <CardSkeleton />
    </Grid>
  )
}
