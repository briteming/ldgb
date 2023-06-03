import { Card } from '..'
import { Container, Header, PostsList, SearchInput } from './styles'

export function Posts() {
  return (
    <Container>
      <Header>
        <h2>Posts</h2>
        <p>6 posts</p>
        <SearchInput type="text" placeholder="Search posts" />
      </Header>

      <PostsList>
        <Card
          title="JavaScript data types and data structures"
          excerpt="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..."
          date={new Date()}
        />
        <Card
          title="JavaScript data types and data structures"
          excerpt="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..."
          date={new Date()}
        />
        <Card
          title="JavaScript data types and data structures"
          excerpt="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..."
          date={new Date()}
        />
      </PostsList>
    </Container>
  )
}
