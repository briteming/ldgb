import { useParams } from 'react-router-dom'
import { ErrorMessage, PostContent, PostDetails } from '@/components'
import { PostAPI } from '@/api'

export function Post() {
  const { issueNumber } = useParams()
  const { data, error, isLoading } = PostAPI.usePost(issueNumber)

  if (error)
    return (
      <ErrorMessage>
        Sorry, we couldn't load the post at the moment. Please try again later.
      </ErrorMessage>
    )

  return (
    <>
      <PostDetails data={data} isLoading={isLoading} />
      {!isLoading && (
        <section>
          <PostContent content={data?.body} />
        </section>
      )}
    </>
  )
}
