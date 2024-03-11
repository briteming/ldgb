import logo from '@/assets/logo.svg'
import { HeaderContainer } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
        <span className="visually-hidden">Home page</span>
      </Link>
    </HeaderContainer>
  )
}
