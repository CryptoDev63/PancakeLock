import React from 'react'
import styled from 'styled-components'

const ContractInfo: React.FC = ({ children }) => {
  return (
    <div className="text-center">
      <div>
        <img src="assets/images/Pancakelock_Logo.svg" />
        <span className="ml-2 mr-2 font-weight-bold">PLOCK -</span>
        <img src="assets/images/BNB_Coin.svg" />
        <span className="ml-2 font-weight-bold">WBNB</span>
      </div>
      <div className="mt-3">
        <span className="font-12 text-gray">0xb05AF453011d7ad68a92b0065FFD9d1277eD2741</span>
      </div>
    </div>
  )
}

export default ContractInfo
