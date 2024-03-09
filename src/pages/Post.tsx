import { PostAPI } from '@/api'
import { useParams } from 'react-router-dom'

export function Post() {
  const { issueNumber } = useParams()
  const { data, error, isLoading } = PostAPI.usePost(issueNumber)

  if (error) return <p>Something went wrong...</p>
  if (isLoading) return <p>Loading...</p>

  return (
    <div>
      <p>Title: {data?.title}</p>
      <p>Title: {data?.html_url}</p>
      <p>Username: {data?.user?.login}</p>
      <p>Comments: {data?.comments}</p>
      <p>Created at: {data?.created_at}</p>
      <p>Created at: {data?.body}</p>
    </div>
  )
}
