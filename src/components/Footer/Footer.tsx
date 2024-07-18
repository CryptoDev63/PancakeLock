import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'
import bgImg from '../../assets/img/footerbg.svg'

const Footer: React.FC = () => (
  <footer className="py-3">
    <div className="container">
      <nav className="navbar justify-content-center">
        <ul className="list-inline mb-0">
          <li className="list-inline-item mr-sm-3">
            <a className="nav-link px-0" href="https://twitter.com/pancakelock_"><img className="mr-2" src="assets/images/Twitter.svg" /></a>
          </li>
          <li className="list-inline-item mr-sm-3">
            <a className="nav-link px-0" href="https://github.com/pancakelock"><img className="mr-2" src="assets/images/Github.svg" /></a>
          </li>
          <li className="list-inline-item mr-sm-3">
            <a className="nav-link px-0" href="https://pancakelock.medium.com"><img className="mr-2" src="assets/images/Meduim.svg" /></a>
          </li>
          <li className="list-inline-item">
            <a className="nav-link px-0" href="https://t.me/pancakelock"><img className="mr-2" src="assets/images/Telegram.svg" /></a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
)

const StyledFooter = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0px;
  padding: 40px;
  justify-content: center;
`
const StyledFooterInner = styled.div`
  align-items: start;
  display: flex;
  justify-content: center;
  height: 30px;
  width: 100%;
`
const StyledImg = styled.div`
  background-position: center bottom;
  background-repeat: repeat-x;
  padding-bottom: 17%;
  background-size: 50%;
`

export default Footer
