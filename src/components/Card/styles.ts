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
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 160%;
  color: ${({ theme }) => theme['base-title']};
`

export const Date = styled.span`
  margin-top: 0.375rem;
  flex-shrink: 0;
  font-size: 0.875rem;
  text-align: right;
  color: ${({ theme }) => theme['base-span']};
`

export const Excerpt = styled.p`
  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};
`
