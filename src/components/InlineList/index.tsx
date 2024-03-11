import { Container } from './styles'
import { IInlineList } from './types'

export function InlineList({ children }: IInlineList) {
  return <Container>{children}</Container>
}
