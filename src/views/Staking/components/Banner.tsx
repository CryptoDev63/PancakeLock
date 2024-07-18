import React from 'react'
import styled from 'styled-components'

const Banner: React.FC = ({ children }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="heading">
          <h3>Stake on Pancakelock</h3>
        </div>
        <div className="heading">
          <h5>Deposit PLOCK to earn $PLOCK rewards</h5>
        </div>
      </div>
    </div>
  )
}

export default Banner
