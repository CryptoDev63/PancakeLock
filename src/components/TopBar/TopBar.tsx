import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Logo from '../Logo'
import ThemeSelector from './components/ThemeSelector'
import Nav from './components/Nav'
import Language from './components/Language'
import Other from './components/Other'
import AccountButton from './components/AccountButton'

const StyledNav = styled.nav`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'};
  border-bottom: ${(props) => props.theme.isDark ? '1px solid #dee2e6' : '1px solid #232323'} !important;
`

const TopBar: React.FC = () => {
  return (
    <StyledNav className="navbar navbar-expand-md navbar-light pl-0 pr-0 border-bottom">
      <div className="container">
        <Logo />
        <ul className="navbar-nav right_menu ml-md-auto position-relative float-right order-sm-5 ">
          <ThemeSelector />
          <Other />
          <AccountButton />
        </ul>
      </div>
    </StyledNav>
  )
}

export default TopBar
