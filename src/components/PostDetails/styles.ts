import { typography } from '@/styles'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
  }
`

export const Title = styled.h2`
  ${typography.heading.lg}
`
