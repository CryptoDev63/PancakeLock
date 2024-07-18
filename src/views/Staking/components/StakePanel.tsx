import React from 'react'
import styled from 'styled-components'
import Claim from './Claim'
import Stake from './Stake'
import Unstake from './Unstake'

const StyledSection = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#F5F5F5' : '#191716'} !important;
`

interface StakePanelProps {
  stakingContract: any
  tokenContract: any
  pid: number
}

const StakePanel: React.FC<StakePanelProps> = ({ stakingContract, tokenContract, pid }) => {
  return (
    <StyledSection className="stacking-box">
      <Claim contract={stakingContract} pid={pid} />
      <div className="row">
        <Stake pid={pid} />
        <Unstake pid={pid} />
      </div>
    </StyledSection>
  )
}

export default StakePanel
