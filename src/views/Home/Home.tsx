import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import Banner from './components/Banner'
import TotalDatas from './components/TotalDatas'
import TokenList from './components/TokenList'
import TokenInfo from './components/TokenInfo'

const Home: React.FC = () => {
  return (
    <Page>
      <Banner />
      <TotalDatas />
      <section>
        <div className="container">
          <div className="row">
            <TokenList />
            <TokenInfo />
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Home
