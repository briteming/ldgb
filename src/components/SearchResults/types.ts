import { GithubIssuesType } from '@/api/posts'

export interface ISearchResults {
  posts?: GithubIssuesType['items']
}
