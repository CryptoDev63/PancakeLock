import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import * as bsc from '@binance-chain/bsc-use-wallet'
import usePlock from '../../../hooks/usePlock'
import useUnstake from '../../../hooks/useUnstake'
import { getBalanceNumber } from '../../../utils/formatBalance'
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

interface UnstakeProps {
  pid: number
}

const Unstake: React.FC<UnstakeProps> = ({ pid }) => {
  const plock = usePlock()
  const stakingContract = getStakingContract(plock)
  const { account, balance } = bsc.useWallet()
  const { onUnstake } = useUnstake(pid)

  const [value, setValue] = useState(0)
  const [totalUnstake, setTotalUnstake] = useState(0)

  useEffect(() => {
    if (account && stakingContract) {
      const fetchUsers = async (pid: number) => {
        const info = await stakingContract.methods
          .users(pid, account)
          .call()
        return info
      }

      fetchUsers(pid).then((result) => {
        setTotalUnstake(getBalanceNumber(new BigNumber(result.total_invested)))
      })
    }
  }, [account, stakingContract])

  const setMaxValue = () => {
    setValue(totalUnstake)
  }

  const handleChange = useCallback((e) => {
    setValue(e.currentTarget.value)
  }, [setValue])

  const handleUnstake = () => {
    if (account) {
      onUnstake(value.toString())
    }
  }

  return (
    <div className="col-lg-6">
      <StyledCard className="card-klock">
        <StyledTitle>Unstake PLOCK</StyledTitle>
        <StyledValue>{totalUnstake.toLocaleString()} PLOCK</StyledValue>
        <div className="from-group form-input">
          <input className="form-control" placeholder="Amount of PLOCK to Unstake " value={value} onChange={handleChange} />
          <a className="btn btn-sm btn-primary" onClick={setMaxValue} >max</a>
        </div>
        <a className="btn btn-primary" onClick={handleUnstake} >Unstakes</a>
      </StyledCard>
    </div>
  )
}

export default Unstake
