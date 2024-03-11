import { ShadowCard } from '@/components'
import { Heading } from './styles'

export function NotFound() {
  return (
    <ShadowCard>
      <Heading>Page not found</Heading>
      <p>The page you're searching for is currently unavailable.</p>
    </ShadowCard>
  )
}
