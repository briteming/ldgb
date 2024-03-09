import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme['red-medium']};
  border-radius: ${({ theme }) => theme['radii-lg']};
  color: ${({ theme }) => theme['red-dark']};
  background-color: ${({ theme }) => theme['red-light']};
`
