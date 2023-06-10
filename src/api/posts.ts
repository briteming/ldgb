import { useQuery } from '@tanstack/react-query'
import { Endpoints } from '@octokit/types'
import { api } from '../lib/axios'

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME
const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO

type GithubIssuesType = Endpoints['GET /search/issues']['response']['data']

const fetchPosts = async (
  username: string,
  repository: string,
  query: string
): Promise<GithubIssuesType> => {
  try {
    const response = await api.get(
      `/search/issues?q=${query} repo:${username}/${repository}`
    )
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
  usePosts: (query: string) =>
    useQuery({
      queryKey: ['posts', GITHUB_USERNAME, GITHUB_REPO, query],
      queryFn: () => fetchPosts(GITHUB_USERNAME, GITHUB_REPO, query),
      staleTime: 1 * 60 * 60 * 1000, // 1 hour
    }),
}
