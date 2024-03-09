import { Container } from './styles'
import { IGrid } from './types'

export function Grid({ children }: IGrid) {
  return <Container>{children}</Container>
}
