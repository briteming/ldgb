import styled, { css } from 'styled-components'
import { skeletonLoading, typography } from '@/styles'

interface IContainer {
  isLoading: boolean
}

const loadingStyles = css`
  height: 13.75rem;
  ${skeletonLoading}
`

export const Container = styled.div<IContainer>`
  border-radius: ${({ theme }) => theme['radii-lg']};
  margin-bottom: 2rem;
  padding: 2.25rem 2.5rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme['base-profile']};

  a,
  button {
    ${typography.text.sm}
    border: 0;
    border-bottom: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;

    &,
    &:active,
    &:visited {
      color: ${({ theme }) => theme['blue']};
    }

    &:hover {
      border-color: ${({ theme }) => theme['blue']};
    }
  }

  ${({ isLoading }) => isLoading && loadingStyles}
`
