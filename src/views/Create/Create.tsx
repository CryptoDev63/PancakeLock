import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import Header from './components/Header'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const StyledInput = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#F5F5F5' : '#191716'} !important;
`

const StyledTitle = styled.td`
  color: ${(props) => props.theme.isDark ? '#232323' : '#ffffff'} !important;
`

const Create: React.FC = () => {
  return (
    <Page>
      <section className="create-lock">
        <div className="container px-1">
          <div className="row min-vh-100 mx-0 ">
            <div className="col-md-12 d-flex align-items-center px-0">
              <div className="row justify-content-center w-100 px-sm-5">
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <StyledCard className="card rounded-lg w-60 shadow">
                    <Header />
                    <div className="card-body px-sm-5 px-2 pb-4 pt-1">
                      <div className="w-100 position-relative">                      
                        <p className="font-12 text-gray text-center">Select the type of token you would like to create a lock for.
                          You can create multiple locks with different settings for each one.</p>                      
                        <div className="radio-select">
                          <div className="">
                            <input type="radio" id="test1" name="radio-group" checked />
                            <StyledInput className="d-flex custome-box-radio">                              
                              <StyledTitle className="mb-0 text-lightgray mt-1">Liquidity Tokens <br/><span className="font-10 text-gray">UNI-V2 LP Tokens generated from Uniswap Pool</span></StyledTitle>
                              <img src="assets/images/lock_yellow.svg" className="ml-auto" />
                            </StyledInput>
                          </div>
                          <div className="mt-3">
                            <input type="radio" id="test2" name="radio-group" />
                            <StyledInput className="d-flex custome-box-radio">                               
                              <StyledTitle className="mb-0 text-lightgray mt-1">Project Tokens <br/><span className="font-10 text-gray">Regular ERC-20 Project Tokens</span></StyledTitle>
                              <img src="assets/images/Doc_yellow.svg" className="ml-auto" />
                            </StyledInput>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                          <a href="./enter-address.html" className="btn btn-primary px-4 py-2 btn-w">Continue   <img src="assets/images/right_arrow_white.svg" /></a>
                        </div>
                      </div>
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

export default Create
