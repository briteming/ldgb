import { useParams } from 'react-router-dom'
import { PostContent, PostDetails } from '@/components'
import { PostAPI } from '@/api'

export function Post() {
  const { issueNumber } = useParams()
  const { data, error, isLoading } = PostAPI.usePost(issueNumber)

  if (error) return <p>Something went wrong.</p>
  if (isLoading) return <p>Loading...</p>
  if (!data || !data.user) return null

  return (
    <>
      <PostDetails
        comments={data.comments}
        createdAt={data.created_at}
        title={data.title}
        url={data.html_url}
        username={data.user.login}
      />
      <section>
        <PostContent content={data.body} />
      </section>
    </>
  )
}
