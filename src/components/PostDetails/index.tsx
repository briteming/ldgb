import {
  faComment,
  faCalendarDay,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Details, ExtraInfo, Name } from './styles'
import { IPostDetails } from './types'
import dayjs from 'dayjs'

export function PostDetails({
  title,
  url,
  username,
  createdAt,
  comments,
}: IPostDetails) {
  const relativeDate = dayjs(createdAt).fromNow()

  return (
    <Container>
      <Details>
        <header>
          <Name>{title}</Name>
          <a href={url} target="_blank">
            See on Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </header>
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
      </Details>
    </Container>
  )
}
