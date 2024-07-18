import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { darkTheme, lightTheme } from '../../../theme';
import { useDispatch } from 'react-redux';
import { useIsDarkMode, useDarkModeManager } from '../../../state/user/hooks'

const ThemeButton = styled.button`
  padding: 0px;
  border: none;
  border-radius: 50%;
`

const ThemeSelector = () => {
  const dispatch = useDispatch()
  const darkMode = useIsDarkMode()
  const [toggleSetDarkMode] = useDarkModeManager()
  const [isDark, setIsDark] = useState(false)

  return (
    <li className="nav-item mr-sm-2 mr-1 mr-sm-4">
      <ThemeButton className="btn-switch" onClick={() => toggleSetDarkMode()}>          
        <img src={ darkMode ? "assets/images/Light-Mode.svg" : "assets/images/Dark_Mode.svg" }/>
      </ThemeButton>
    </li>
  )
}

export default ThemeSelector
