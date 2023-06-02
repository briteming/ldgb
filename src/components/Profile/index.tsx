import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Avatar, Bio, Container, Details, ExtraInfo, Name } from './styles'
import { UserInfo } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  async function getProfileData() {
    const response = await api.get(
      `/users/${import.meta.env.VITE_GITHUB_USERNAME}`
    )

    if (!response.data) return

    setUserInfo({
      url: response.data.html_url,
      username: response.data.login,
      name: response.data.name,
      bio: response.data.bio,
      followers: response.data.followers,
      avatarUrl: response.data.avatar_url,
    })
  }

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <Container>
      <Avatar src={userInfo?.avatarUrl} alt="Profile image" />

      <Details>
        <div>
          <header>
            <Name>{userInfo?.name}</Name>
            <a href={userInfo?.url} target="_blank">
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </a>
          </header>
          <Bio>{userInfo?.bio}</Bio>
        </div>
        <div>
          <ExtraInfo>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {userInfo?.username}
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Great State
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {userInfo?.followers} followers
            </li>
          </ExtraInfo>
        </div>
      </Details>
    </Container>
  )
}
