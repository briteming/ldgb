import { typography } from '@/styles'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Avatar = styled.img`
  border-radius: ${({ theme }) => theme['radii-sm']};
  width: 148px;
  height: 148px;
`

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

export const Name = styled.h2`
  ${typography.heading.lg}
`
