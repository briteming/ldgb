import { useQuery } from '@tanstack/react-query'
import { Endpoints } from '@octokit/types'
import { api } from '@/lib'

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME
const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO

// https://octokit.github.io/types.ts/interfaces/Endpoints.html
export type GithubIssueType =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data']

const fetchPost = async (
  username: string,
  repository: string,
  issueNumber?: string,
): Promise<GithubIssueType> => {
  if (!issueNumber) return Promise.reject('Missing issue number')

  try {
    const response = await api.get(
      `/repos/${username}/${repository}/issues/${issueNumber}`,
    )
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export default {
  usePost: (issueNumber?: string) => {
    return useQuery({
      queryKey: ['post', GITHUB_USERNAME, GITHUB_REPO, issueNumber],
      queryFn: () => fetchPost(GITHUB_USERNAME, GITHUB_REPO, issueNumber),
      staleTime: 1 * 60 * 60 * 1000, // 1 hour
    })
  },
}
