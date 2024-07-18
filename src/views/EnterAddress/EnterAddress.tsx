import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import Header from './components/Header'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const EnterAddress: React.FC = () => {
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
                        <p className="font-12 text-gray mb-0 mt-3">Enter the Pancakelockswap pair address you'd like to lock liquidity for</p>
                        <form className="example mt-1" action="action_page.php">
                          <div className="position-relative">
                            <input type="text" placeholder="Enter address" name="Address" className="form-control text-gray" />
                            <button type="submit" className="lock-btn"><img src="assets/images/Search_grey.svg" /></button>
                          </div>
                          <p className="font-12 text-gray">e.g. 0xb05AF453011d7ad68a92b0065FFD9d1277eD2741</p>
                        </form>
                        <div className="text-center mt-4">
                          <h4 className="text-yellow font-weight-bold">Pair Found</h4>
                          <img src="assets/images/Pancakelock_Logo.svg" /><span className="ml-2 mr-2 font-weight-bold">PLOCK -</span> <span className="ml-2 font-weight-bold">WBNB</span>
                        </div>
                        <div className="text-center mt-4">
                          <a href="./Configure Lock.html" className="btn btn-primary px-4 py-2 btn-w">Continue   <img src="assets/images/right_arrow_white.svg" /></a>
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

export default EnterAddress
