import { Container } from './styles'
import { IErrorMessage } from './types'

export function ErrorMessage({ children }: IErrorMessage) {
  return <Container role="alert">{children}</Container>
}
