import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import Header from './components/Header'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#191716'} !important;
`

const StyledInput = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#F5F5F5' : '#232323'} !important;
`

const StyledTitle = styled.h6`
  color: ${(props) => props.theme.isDark ? '#232323' : '#ffffff'} !important;
`

const Config: React.FC = () => {
  return (
    <Page>
      <section className="create-lock configure-lock">
        <div className="container px-1">
          <div className="row min-vh-100 align-items-center mx-0">
            <div className="col-md-12 px-0">
              <div className="row justify-content-center w-100 px-sm-5 ">
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <StyledCard className="card rounded-lg w-60 shadow">
                    <Header />
                    <div className="card-body px-4 pb-4">
                      <StyledInput className="box-1 w-100 position-relative p-0">
                        <div className=" d-flex justify-content-between p-4 mb-2">
                          <div className="left-part">
                            <StyledTitle className="font-weight-bold">Lock Amount</StyledTitle>
                            <span className="text-gray">0</span>
                          </div>
                          <div className="right-part">
                            <div>
                              <select className="vodiapicker">
                                <option value="en" className="test" data-src="assets/images/Bitcoin_btc.svg">BTC Coin</option>
                                <option value="au" data-src="assets/images/ethereum-eth.svg">ETH Coin</option>
                                <option value="uk" data-src="assets/images/Bitcoin_btc.svg">BTC Coin</option>                              
                              </select>                  
                              <div className="lang-select">
                                <button className="btn-select" value=""></button>
                                <div className="b">
                                  <ul id="a"></ul>
                                  <span className="caret"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center lock-ab">
                          <img src="assets/images/Lock_swap.svg" />
                        </div>
                        <div className=" d-flex justify-content-between p-4 border-top">
                          <div className="left-part">
                            <StyledTitle className="font-weight-bold">Unlock Date</StyledTitle>
                            <span className="text-gray">90</span>
                          </div>
                          <div className="right-part">
                            <StyledTitle className="font-weight-bold">May 22, 2021</StyledTitle>
                            <span className="text-gray font-weight-bold">
                              <select id="days" className="border-0">
                                <option value="volvo">Days</option>
                                <option value="saab">Month</option>
                                <option value="vw">Year</option>
                              </select>
                            </span>
                          </div>
                        </div>
                      </StyledInput>
                      <div className="lower-part mt-4">
                        <span className="text-yellow">Available Token</span>
                        <StyledInput className="box-1 d-flex justify-content-between p-4 mb-2">
                          <div className="left-part">
                            <StyledTitle className="font-weight-bold"><img src="assets/images/BNB_Logo.svg" />Binance</StyledTitle>
                          </div>
                          <div className="right-part">
                            <span className="text-yellow bg-yellow px-2 font-12">MAX</span>
                            <span>25.490.00</span>
                          </div>
                        </StyledInput>
                        <span className="text-gray">Fee = <span className="text-yellow">0% (No Fee)</span></span>
                      </div>
                      <div className="text-center mt-5">
                        <a href="#" className="btn btn-primary px-sm-4 px-2 py-2 mr-sm-3 mb-2">
                          Approve Lock
                          <img src="assets/images/right_arrow_white.svg" />
                        </a>
                        <a href="#" className="btn btn-gray px-sm-4 px-2 py-2 mb-2">
                          Lock UNI-V2
                          <img src="assets/images/right_arrow_grey.svg" />
                        </a>
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

export default Config
