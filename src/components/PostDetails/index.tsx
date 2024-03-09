import {
  faComment,
  faCalendarDay,
  faArrowUpRightFromSquare,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { Container, ExtraInfo, Title } from './styles'
import { IPostDetails } from './types'
import dayjs from 'dayjs'

export function PostDetails({
  title,
  url,
  username,
  createdAt,
  comments,
}: IPostDetails) {
  const navigate = useNavigate()
  const relativeDate = dayjs(createdAt).fromNow()

  return (
    <Container>
      <header>
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} size="xs" />
          Back
        </button>
        <a href={url} target="_blank">
          See on Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      </header>
      <Title>{title}</Title>
      <ExtraInfo>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {username}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          {relativeDate}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {comments} comments
        </li>
      </ExtraInfo>
    </Container>
  )
}
