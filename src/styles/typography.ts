import { css } from 'styled-components'

export const typography = {
  heading: {
    lg: css`
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-title']};
    `,
    md: css`
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-title']};
    `,
    sm: css`
      font-size: 1.125rem;
      font-weight: 700;
      color: ${({ theme }) => theme['base-title']};
    `,
  },
  text: {
    md: css`
      font-size: 1rem;
    `,
    sm: css`
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    `,
    xs: css`
      font-size: 0.75rem;
    `,
  },
}
