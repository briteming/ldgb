import { Container, Header, PostsList, SearchInput } from './styles'
import PostsAPI from '../../api/posts'
import { Card } from '..'

export function Posts() {
  const { data, error, isLoading } = PostsAPI.usePosts('')

  if (error) return <p>Something went wrong.</p>
  if (isLoading) return <p>Loading...</p>

  return (
    <Container>
      <Header>
        <h2>Posts</h2>
        <p>6 posts</p>
        <SearchInput type="text" placeholder="Search posts" />
      </Header>

      <PostsList>
        {data?.items.map((post) => {
          return (
            <Card
              key={post.id}
              title={post.title}
              content={post.body}
              date={post.created_at}
              issueNumber={post.number}
            />
          )
        })}
      </PostsList>
    </Container>
  )
}
