import React from 'react'
import styled from 'styled-components'
import * as bsc from '@binance-chain/bsc-use-wallet'
import IndividualData from './IndividualData'

interface TotalDataProps {
  totalDeposit: number
  apy: number
  stakingAddress: string
}

const TotalDatas: React.FC<TotalDataProps> = ({ totalDeposit, apy, stakingAddress }) => {

  const getPoolAddress = () => {
    if (stakingAddress) {
      const address = stakingAddress.toString().substring(0, 8) + '...'
      return address
    }
    return '0x000000...'
  }

  return (
    <div className="row">
      <IndividualData image="assets/images/wallet.png" title="Total Deposited" value={totalDeposit.toLocaleString()} />
      <IndividualData image="assets/images/money.png" title="Earnings Rate" value="$0.0214" />
      <IndividualData image="assets/images/percent.png" title="APY" value={`${apy}%`} />
      <IndividualData image="assets/images/layer.png" title="Staking Pool" value={getPoolAddress()} />
    </div>
  )
}

const StyledCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background:  ${(props) => props.theme.cardbackgroundColor};
  border: 0px;
  border-radius: 28px;
  box-shadow: ${(props) => props.theme.boxshadow};
  width: 320px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export default TotalDatas


