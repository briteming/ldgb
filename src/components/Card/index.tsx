import dayjs from 'dayjs'
import { Container, Date, Excerpt, Heading } from './styles'
import { CardProps } from './types'

export function Card({ excerpt, date, title }: CardProps) {
  return (
    <Container>
      <header>
        <Heading>{title}</Heading>
        <Date>{dayjs(date).startOf('M').fromNow()}</Date>
      </header>
      <Excerpt>{excerpt}</Excerpt>
    </Container>
  )
}
