import React from 'react'
import styled from 'styled-components'
import { useIsDarkMode, useDarkModeManager } from '../../../state/user/hooks'

const StyledInput = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#F5F5F5' : '#191716'} !important;
`

const LockStatus: React.FC = ({ children }) => {
  const darkMode = useIsDarkMode()

  return (
    <div className=" mt-4">
      <StyledInput className="box-1 d-flex justify-content-between p-4 mb-2">
        <div className="left-part">
          <h6 className="font-weight-bold mb-0 mt-2"> 99.99% LOCKED</h6>
        </div>
        <div className="right-part ">
          <img src={ darkMode ? "assets/images/Lock_Grey.svg" : "assets/images/Lock_Grey.svg" } />
        </div>
      </StyledInput>
    </div>
  )
}

export default LockStatus
