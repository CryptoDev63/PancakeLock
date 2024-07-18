import React from 'react'
import styled from 'styled-components'
import { useIsDarkMode, useDarkModeManager } from '../../../state/user/hooks'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#191716'} !important;
`

const Header: React.FC = ({ children }) => {
  const darkMode = useIsDarkMode()

  return (
    <StyledCard className="card-header text-center border-bottom-0 light-mode">
      <div className="d-inline-block float-left">
        <a href="./enterAddress">
          <img src={ darkMode ? "assets/images/Back_Arrow.svg" : "assets/images/back_white_arrow.svg" } />
        </a>
      </div>
      <img src="assets/images/create-lock.svg" />
      <span className="font-16 font-weight-bold" >Configure Lock</span>
    </StyledCard>
  )
}

export default Header
