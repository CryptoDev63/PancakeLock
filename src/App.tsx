import React, { useCallback, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import MobileMenu from './components/MobileMenu'
import ModalsProvider from './contexts/Modals'
import PlockProvider from './contexts/PlockProvider'
import { useIsDarkMode } from './state/user/hooks'
import { lightTheme, darkTheme } from './theme'
import Home from './views/Home'
import Staking from './views/Staking'
import Overview from './views/Overview'
import EnterAddress from './views/EnterAddress'
import Create from './views/Create'
import Config from './views/Config'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    background: ${(props: any) => props.theme.backgroundColor};
    color: ${(props: any) => props.theme.isDark ? '#232323' : '#ffffff'};
  }
`
const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  return (
    <Providers>
        <GlobalStyle />
        <Router>
          <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
          <Switch>
            <Route path="/" exact>
              <Staking />
            </Route>
            <Route path="/staking" exact>
              <Staking />
            </Route>
            <Route path="/overview" exact>
              <Overview />
            </Route>
            <Route path="/enterAddress" exact>
              <EnterAddress />
            </Route>
            <Route path="/create" exact>
              <Create />
            </Route>
            <Route path="/config" exact>
              <Config />
            </Route>
          </Switch>
        </Router>
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  const darkMode = useIsDarkMode()

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <UseWalletProvider
        chainId={56}
        connectors={{
          walletconnect: { rpcUrl: 'https://bsc-dataseed.binance.org/' },
        }}
      >
      {/* <UseWalletProvider
        chainId={97}
        connectors={{
          walletconnect: { rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/' },          
        }}
      > */}
          <PlockProvider>
            <ModalsProvider>{children}</ModalsProvider>
          </PlockProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

export default App
