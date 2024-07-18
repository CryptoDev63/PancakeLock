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

const Language = () => {
  const dispatch = useDispatch()
  const darkMode = useIsDarkMode()
  const [toggleSetDarkMode] = useDarkModeManager()
  const [isDark, setIsDark] = useState(false)

  return (    
    <li className="nav-item mr-sm-4 mr-1 d-flex border-yellow">
      <span className="mt-1"><img src="assets/images/Language.svg" /></span>
      <select className="selectpicker form-control" data-live-search="true" data-default="India" data-flag="true">
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Australia">Australia</option>
        <option value="South Africa">South Africa</option>
      </select>
    </li>
  )
}

export default Language
