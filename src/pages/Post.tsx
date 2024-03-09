import { PostAPI } from '@/api'
import { Markdown, PostDetails } from '@/components'
import { useParams } from 'react-router-dom'

export function Post() {
  const { issueNumber } = useParams()
  const { data, error, isLoading } = PostAPI.usePost(issueNumber)

  if (error) return <p>Something went wrong.</p>
  if (isLoading) return <p>Loading...</p>
  if (!data || !data.user) return

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
        <Markdown content={data.body} />
      </section>
    </>
  )
}
