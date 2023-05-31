import { useParams } from 'react-router-dom'

export function Post() {
  const { issueNumber } = useParams()
  return <div>Post number: {issueNumber}</div>
}
