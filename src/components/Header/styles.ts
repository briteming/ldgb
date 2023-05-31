import styled from 'styled-components'
import headerBg from '../../assets/header-bg.jpeg'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 296px;
  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  img {
    transform: translateY(-50%);
  }
`
