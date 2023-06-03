import { useQuery } from '@tanstack/react-query'
import { Endpoints } from '@octokit/types'
import { api } from '../lib/axios'

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME

type GithubProfileType = Endpoints['GET /users/{username}']['response']['data']

const fetchProfile = async (username: string): Promise<GithubProfileType> => {
  try {
    const response = await api.get(`/users/${username}`)
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
  useProfile: () =>
    useQuery({
      queryKey: ['profile'],
      queryFn: () => fetchProfile(GITHUB_USERNAME),
      staleTime: 1 * 24 * 60 * 60 * 1000, // 1 day
    }),
}
