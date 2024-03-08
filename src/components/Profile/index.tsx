import {
  faUserGroup,
  faArrowUpRightFromSquare,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Bio, Container, Details, ExtraInfo, Name } from './styles'
import { ProfileAPI } from '@/api'

export function Profile() {
  const { data, error, isLoading } = ProfileAPI.useProfile()

  if (error) return <Container>Something went wrong...</Container>
  if (isLoading) return <Container>Loading...</Container>

  return (
    <Container>
      <Avatar src={data?.avatar_url} alt="Profile image" />

      <Details>
        <div>
          <header>
            <Name>{data?.name}</Name>
            <a href={data?.html_url} target="_blank">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
          </header>
          <Bio>{data?.bio}</Bio>
        </div>
        <div>
          <ExtraInfo>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {data?.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              {data?.location}
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {data?.followers} followers
            </li>
          </ExtraInfo>
        </div>
      </Details>
    </Container>
  )
}
