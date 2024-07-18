import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { getBalanceNumber } from '../../../utils/formatBalance'
import useClaim from '../../../hooks/useClaim'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#F5F5F5' : '#191716'} !important;
`
interface ClaimProps {
  contract: any
  pid: number
}

const Claim: React.FC<ClaimProps> = ({ contract, pid }) => {
  const { account, balance, ethereum } = bsc.useWallet()
  const [totalReward, setTotalReward] = useState(0)
  const { onClaim } = useClaim(pid)

  useEffect(() => {
    if (account && ethereum && contract) {
      const fetchUsers = async (pid: number) => {
        const info = await contract.methods
          .users(pid, account)
          .call()
        return info
      }

      fetchUsers(pid).then((result) => {
        setTotalReward(getBalanceNumber(new BigNumber(result.total_withdrawn)))
      })
    }
  }, [account, ethereum, contract])

  const handleUnstake = () => {
    if (account) {
      onClaim()
    }
  }

  return (
    <div className="row">
      <div className="col-lg-12">
        <StyledCard className="rewardbox mb-4">
          <div className="pllock">
            <div className="img">
              <img src="assets/images/1608904_gift_icon.png" alt="" />
            </div>
            <div className="plock-text">
              <p>Total Reward Earned</p>
              <h3>{totalReward.toLocaleString()} PLOCK</h3>
            </div>              
          </div>
         <a className="btn btn-primary" onClick={handleUnstake} >Claim Your Rewards <img src="assets/images/arrow-right.2a53bec1.png" alt="" /></a>
        </StyledCard>
      </div>
    </div>
  )
}

export default Claim
