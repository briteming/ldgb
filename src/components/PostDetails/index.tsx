import {
  faComment,
  faCalendarDay,
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { Container, Title } from './styles'
import { IPostDetails } from './types'
import dayjs from 'dayjs'
import { ShadowCard, InlineList } from '@/components'

export function PostDetails({ data, isLoading }: IPostDetails) {
  const navigate = useNavigate()

  if (!data) return null
  const { title, html_url, user, created_at, comments } = data
  const relativeDate = dayjs(created_at).fromNow()

  return (
    <ShadowCard isLoading={isLoading}>
      <Container>
        {isLoading && <p className="visually-hidden">Loading...</p>}
        {!isLoading && (
          <>
            <header>
              <button onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faChevronLeft} size="xs" />
                Back
              </button>
              <a href={html_url} target="_blank">
                See on Github
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
              </a>
            </header>
            <Title>{title}</Title>
            <InlineList>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {user?.login}
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendarDay} />
                {relativeDate}
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} />
                {comments} comments
              </li>
            </InlineList>
          </>
        )}
      </Container>
    </ShadowCard>
  )
}
