import { skeletonLoading } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  border-radius: ${({ theme }) => theme['radii-lg']};
  border: 1px solid transparent;
  padding: 2rem;
  ${skeletonLoading}

  div {
    border-radius: ${({ theme }) => theme['radii-sm']};
    width: 100%;
    height: 8rem;
    background-color: ${({ theme }) => theme['base-label']};
  }

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    div {
      width: 60%;
      height: 1.25rem;
      background-color: ${({ theme }) => theme['base-text']};

      &:last-child {
        width: 40%;
        background-color: ${({ theme }) => theme['base-span']};
      }
    }
  }
`
