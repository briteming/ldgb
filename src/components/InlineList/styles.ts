import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['base-span']};

    svg {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
