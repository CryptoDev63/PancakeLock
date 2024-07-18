import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const TokenInfo: React.FC = ({ children }) => {
  return (
    <div className="col-md-4">
      <StyledCard className="card graph-card text-center py-5 shadow-sm">
        <div className="px-4">
          <ul className="list-unstyled d-flex align-items-end mb-0">
            <li>
              <p className="font-14">Sabtu, 5 December 2021</p>
              <h3 className="font-20 mb-0 font-semibold">IDR 269,035,910</h3>
            </li>
            <li className="ml-auto">
              <p className="font-14 text-yellow mb-0">+3.14%</p>
            </li>
          </ul>
        </div>
        <div className="card-body mt-5">
            <canvas id="chLine"></canvas>
        </div>
        <div className="mt-4">
          <p className="">Buy Crypto with <span className="font-extrabold font-20">0% fee</span></p>
          <p>on credit/debit card for your first 30days</p>
          <a href="#" className="btn btn-primary mt-3 mb-3">Install and buy now</a>
        </div>
      </StyledCard>
    </div>
  )
}

export default TokenInfo
