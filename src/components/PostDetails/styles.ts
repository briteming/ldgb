import styled from 'styled-components'

export const Container = styled.section`
  border-radius: ${({ theme }) => theme['radii-lg']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 2rem;
  padding: 2.25rem 2.5rem;
  background-color: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
  }

  a,
  button {
    border: 0;
    border-bottom: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%;
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
`

export const Title = styled.h2`
  line-height: 130%;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme['base-title']};
`

export const ExtraInfo = styled.ul`
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
