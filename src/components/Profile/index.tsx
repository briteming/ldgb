import {
  faUserGroup,
  faArrowUpRightFromSquare,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Bio, Container, Details, Name } from './styles'
import { ShadowCard, ErrorMessage, InlineList } from '@/components'
import { ProfileAPI } from '@/api'

export function Profile() {
  const { data, error, isLoading } = ProfileAPI.useProfile()

  return (
    <ShadowCard isLoading={isLoading}>
      <Container>
        {!isLoading && !!error && (
          <ErrorMessage>
            Sorry, we couldn't load the profile at the moment. Please try again
            later.
          </ErrorMessage>
        )}
        {isLoading && !error && <p className="visually-hidden">Loading...</p>}
        {!isLoading && !error && (
          <>
            <Avatar src={data?.avatar_url} alt="Profile image" />

            <Details>
              <div>
                <header>
                  <Name>{data?.name}</Name>
                  <a href={data?.html_url} target="_blank">
                    Github
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="xs"
                    />
                  </a>
                </header>
                <Bio>{data?.bio}</Bio>
              </div>
              <InlineList>
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
              </InlineList>
            </Details>
          </>
        )}
      </Container>
    </ShadowCard>
  )
}
