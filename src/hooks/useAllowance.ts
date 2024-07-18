import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import usePlock from './usePlock'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { getAllowance } from '../utils/erc20'
import { getStakingAddress } from '../plock/utils'

const useAllowance = (contract: Contract) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string; ethereum: provider } = bsc.useWallet()
  const plock = usePlock()
  const stakingContract = getStakingAddress(plock)

  console.log("pooh, stakingContract = ", stakingContract)

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      contract,
      account,
      stakingContract,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, stakingContract, contract])

  useEffect(() => {
    if (account && stakingContract && contract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, stakingContract, contract])

  return allowance
}

export default useAllowance
