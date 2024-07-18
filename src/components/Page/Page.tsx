import React from 'react'
import styled from 'styled-components'
import TopBar from '../TopBar'
import Footer from '../Footer'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <TopBar />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledPage>
)

const StyledPage = styled.div`
  background-image: ${(props) => props.theme.isDark ? 'url(assets/images/Background_light.png)' : 'url(assets/images/Background_dark.png)'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.isDark ? '#E8EDEF' : '#434343'};

  min-height: calc(100vh - 63px);
`

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
export default Page
