import { GithubIssuesType } from '@/api/posts'

export interface IResults {
  posts?: GithubIssuesType['items']
}
