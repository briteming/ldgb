import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { IPostCard } from './types'
import { Container, Date, Excerpt, Heading } from './styles'
import { stripMarkdown, truncateText } from '@/utils'

export function PostCard({ title, content, date, issueNumber }: IPostCard) {
  const [cleanContent, setCleanContent] = useState('')
  const relativeDate = dayjs(date).fromNow()

  useEffect(() => {
    async function cleanMarkdown(markdown: string) {
      const plain = await stripMarkdown(markdown)
      setCleanContent(plain)
    }

    if (content) cleanMarkdown(content)
  }, [content])

  return (
    <Container as={Link} to={`/post/${issueNumber}`}>
      <header>
        <Heading>{title}</Heading>
        <Date>{relativeDate}</Date>
      </header>
      {cleanContent && <Excerpt>{truncateText(cleanContent, 100)}</Excerpt>}
    </Container>
  )
}
