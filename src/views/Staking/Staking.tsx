import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { AbiItem } from 'web3-utils'
import { provider } from 'web3-core'
import * as bsc from '@binance-chain/bsc-use-wallet'
import StakingABI from '../../constants/abi/staking.json'
import ERC20ABI from '../../constants/abi/ERC20.json'
import Page from '../../components/Page'
import Banner from './components/Banner'
import TotalDatas from './components/TotalDatas'
import StakePanel from './components/StakePanel'
import usePlock from '../../hooks/usePlock'
import { getStakingAddress, getPlockAddress, getStakingContract, getPlockContract } from '../../plock/utils'
import { getBalanceNumber } from '../../utils/formatBalance'

const Staking: React.FC = () => {
  const plock = usePlock()
  const stakingAddress = getStakingAddress(plock)
  const stakingContract = getStakingContract(plock)
  const plockAddress = getPlockAddress(plock)
  const plockContract = getPlockContract(plock)
  const [totalDeposit, setTotalDeposit] = useState(0)
  const [APY, setAPY] = useState(0)
  const poolId = 0
  const { account, ethereum }: { account: string; ethereum: provider } = bsc.useWallet()

  useEffect(() => {
    if (ethereum && stakingContract) {
      const getPoolInfo = async (pid: number) => {
        const info = await stakingContract.methods
          .poolInfo(pid)
          .call()
        return info
      }

      getPoolInfo(poolId).then((result) => {
        setTotalDeposit(getBalanceNumber(new BigNumber(result.totalDeposit)))
        setAPY(result.apy)
      })
    }

  }, [ethereum, stakingContract])

  return (
    <Page>
      <section className="stacking-section">
        <div className="stacking-inner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <Banner />
                <TotalDatas totalDeposit={totalDeposit} apy={APY} stakingAddress={plockAddress} />
                <StakePanel stakingContract={stakingContract} tokenContract={plockContract} pid={poolId} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default Staking
