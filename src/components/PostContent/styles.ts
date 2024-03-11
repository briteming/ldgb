import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const MarkdownContainer = styled(ReactMarkdown)`
  margin: 0 2rem;
  color: ${({ theme }) => theme['base-text']};

  * {
    margin-bottom: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme['base-title']};
  }

  a {
    text-decoration: none;
    text-underline-offset: 0.1rem;

    &,
    &:active,
    &:visited {
      color: ${({ theme }) => theme['blue']};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`
