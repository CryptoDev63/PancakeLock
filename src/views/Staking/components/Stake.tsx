import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import { ethers } from 'ethers'
import * as bsc from '@binance-chain/bsc-use-wallet'
import useTokenBalance from '../../../utils/useTokenBalance'
import { getBalanceNumber } from '../../../utils/formatBalance'
import usePlock from '../../../hooks/usePlock'
import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useStake from '../../../hooks/useStake'
import { getStakingAddress, getPlockAddress, getStakingContract, getPlockContract } from '../../../plock/utils'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#F5F5F5' : '#191716'} !important;
`

const StyledTitle = styled.h3`
  color: ${(props) => props.theme.isDark ? '#232323' : '#d0d0d0'} !important;
`

const StyledValue = styled.p`
  color: ${(props) => props.theme.isDark ? '#232323' : '#d0d0d0'} !important;
`

interface StakeProps {
  pid: number
}

const Stake: React.FC<StakeProps> = ({ pid }) => {
  const plock = usePlock()
  const plockContract = getPlockContract(plock)
  const { account, balance } = bsc.useWallet()
  const [value, setValue] = useState(0)
  const [isApproved, setIsApproved] = useState(true)
  const allowance = useAllowance(plockContract)
  const { onApprove } = useApprove(plockContract)
  const { onStake } = useStake(pid)
  const plockBalance = getBalanceNumber(useTokenBalance(getPlockAddress(plock)))

  const web3 = new Web3( new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/') )

  useEffect(() => {
    if (account) {
      const approved = account && allowance && allowance.toNumber() > 0
      setIsApproved(approved)
    } else {
      setIsApproved(false)
    }
  }, [account, allowance])

  const setMaxValue = () => {
    setValue(plockBalance)
  }

  const handleChange = useCallback((e) => {
    setValue(e.currentTarget.value)
  }, [setValue])

  const handleStake = () => {
    if (account) {
      onStake(value.toString())
    }
  }

  const handleApprove = () => {
    if (account) {
      onApprove()
    }
  }

  console.log("pooh, allowance = ", allowance.toNumber())

  return (
    <div className="col-lg-6">
      <StyledCard className="card-klock">
        <StyledTitle>Stake PLOCK</StyledTitle>
        <StyledValue>{plockBalance.toLocaleString()} PLOCK</StyledValue>
        <div className="from-group form-input">
          <input className="form-control" placeholder="Amount of PLOCK to Stake" value={value} onChange={handleChange} />
          <button className="btn btn-sm btn-primary" onClick={setMaxValue} >max</button>
        </div>
        { isApproved ? 
          <button className="btn btn-primary" onClick={handleStake} >Stakes</button>
          :
          <button className="btn btn-primary" onClick={handleApprove} >Approve</button>
        }
      </StyledCard>
    </div>
  )
}

export default Stake
