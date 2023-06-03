import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 2rem;
`

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${({ theme }) => theme['base-span']};
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

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  list-style: none;
`
