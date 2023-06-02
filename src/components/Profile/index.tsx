import { Avatar, Bio, Container, Details, ExtraInfo, Name } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <Container>
      <Avatar
        src="https://github.com/leandrodalmolin.png"
        alt="Profile image"
      />

      <Details>
        <div>
          <header>
            <Name>Leandro Dal Molin</Name>
            <a href="https://www.github.com/leandrodalmolin" target="_blank">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
          </header>
          <Bio>Frontend Software Engineer | Next.js, React, Javascript</Bio>
        </div>
        <div>
          <ExtraInfo>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              leandrodalmolin
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Great State
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />8 followers
            </li>
          </ExtraInfo>
        </div>
      </Details>
    </Container>
  )
}
