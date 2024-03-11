import { Container } from './styles'
import { IShadowCard } from './types'

// Rest adds the className prop enabling styled-components override
// For more: https://styled-components.com/docs/basics#styling-any-component
export function ShadowCard({
  isLoading = false,
  children,
  ...rest
}: IShadowCard) {
  return (
    <Container isLoading={isLoading} {...rest}>
      {children}
    </Container>
  )
}
