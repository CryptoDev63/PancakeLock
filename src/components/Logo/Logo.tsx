import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/logo.png'
import { useIsDarkMode, useDarkModeManager } from '../../state/user/hooks'

const Logo: React.FC = () => {
  const darkMode = useIsDarkMode()
  return (
    <StyledLogo to="/">
      <a className="navbar-brand" href="#">
        <img src={darkMode ? "assets/images/Header_Logo.svg" : "assets/images/Header_Logo1.svg"} alt="logo" />
      </a>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

export default Logo
