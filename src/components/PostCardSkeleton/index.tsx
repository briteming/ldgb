import { Container } from './styles'

export function PostCardSkeleton() {
  return (
    <Container>
      <header aria-hidden="true">
        <div />
        <div />
      </header>
      <div aria-hidden="true" />
      <span className="visually-hidden">Loading...</span>
    </Container>
  )
}
