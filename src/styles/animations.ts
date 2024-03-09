import { css } from 'styled-components'

export const skeletonLoading = css`
  animation: skeleton-loading 1s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      background-color: ${({ theme }) => theme['base-post']};
    }
    100% {
      background-color: ${({ theme }) => theme['base-border']};
    }
  }
`
