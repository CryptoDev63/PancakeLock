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

const Other = () => {
  const dispatch = useDispatch()
  const darkMode = useIsDarkMode()
  const [toggleSetDarkMode] = useDarkModeManager()
  const [isDark, setIsDark] = useState(false)
  const [showMenu, setShowMenu] = useState('')

  const handleShowMenu = useCallback(() => {
    if (showMenu === 'show') {
      setShowMenu('')
    } else {
      setShowMenu('show')
    }
  }, [showMenu, setShowMenu])

  return (    
    <li className="nav-item dropdown dropdown-md dropdown-hover show menu-li mr-sm-2 mr-1 mr-sm-4">
      <a className="nav-icon dropdown-toggle" id="navbarDropdown-7" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" onClick={handleShowMenu} >
          <img src="assets/images/Menu.svg" alt="setting icon" />
      </a>
      <div className={`dropdown-menu position-absolute ${showMenu}`} aria-labelledby="navbarDropdown-7">
        <div className="row gutter-2">
          <div className="col-12">
            <ul className="nav flex-column text-drop">
              <li className="nav-item text-primary py-2">
                <a className="text-primary" href="https://pancakelock.finance/sources/Litepaper.pdf"><img className="mr-2" src="assets/images/Docs.svg" /> Docs</a>
              </li>
              <li className="nav-item text-primary py-2">
                <a className="text-primary" href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/September/Pancakelock.pdf"><img className="mr-2" src="assets/images/Audit.svg" />Audit</a>
              </li>
              <li className="nav-item text-primary py-2">
                <a className="text-primary" href="https://pancakelock.finance/"><img className="mr-2" src="assets/images/Lock.svg" /> Safu Tokens</a>
              </li>
              <li className="nav-item text-primary py-2">
                <a className="text-primary" href="https://pancakeswap.finance/swap#/swap?inputCurrency=BNB&outputCurrency=0xCE0f314013Dc814F2da9d58160C54231fb2dDae2"><img className="mr-2" src="assets/images/Dex.svg" /> Trade PLOCK</a>
              </li>
              <li className="nav-item text-primary py-2">
                <a className="btn btn-primary d-block text-white" href="https://Pancakelock.finance">Safu Lock</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Other
