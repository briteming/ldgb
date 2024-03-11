import { typography } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  border-radius: ${({ theme }) => theme['radii-lg']};
  border: 1px solid transparent;
  padding: 2rem;
  background-color: ${({ theme }) => theme['base-post']};

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  &,
  &:active,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }
`

export const Heading = styled.h3`
  ${typography.heading.md}
`

export const Date = styled.span`
  ${typography.text.sm}
  margin-top: 0.375rem;
  flex-shrink: 0;
  text-align: right;
`

export const Excerpt = styled.p`
  color: ${({ theme }) => theme['base-text']};
`
