import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import Header from './components/Header'
import ContractLinks from './components/ContractLinks'
import ContractInfo from './components/ContractInfo'
import LockStatus from './components/LockStatus'
import LockDetail from './components/LockDetail'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const Overview: React.FC = () => {
  return (
    <Page>
      <section className="create-lock token-overview">
        <div className="container px-1">
          <div className="row min-vh-100 mx-0 ">
            <div className="col-md-12 d-flex align-items-center px-0">
              <div className="row justify-content-center w-100 px-sm-5">
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <StyledCard className="card rounded-lg w-60 shadow">
                    <Header />
                    <div className="card-body px-4 pb-4 pt-2">
                      <ContractInfo />
                      <ContractLinks />
                      <LockStatus />
                      <LockDetail />
                    </div>
                  </StyledCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Overview
