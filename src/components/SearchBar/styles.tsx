import { typography } from '@/styles'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 3rem;

  h2 {
    ${typography.heading.sm}
  }

  p {
    ${typography.text.sm}
  }
`

export const SearchInput = styled.input`
  flex-basis: 100%;
  border: 1px solid ${({ theme }) => theme['base-border']};
  border-radius: ${({ theme }) => theme['radii-sm']};
  padding: 0.75rem 1rem;
  color: ${({ theme }) => theme['base-text']};
  background-color: ${({ theme }) => theme['base-input']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
