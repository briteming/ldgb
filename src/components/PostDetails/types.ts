import { GithubIssueType } from '@/api/post'

export interface IPostDetails {
  data?: GithubIssueType
  isLoading: boolean
}
