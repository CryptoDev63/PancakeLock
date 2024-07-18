import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { getBalance } from './erc20'
import usePlock from '../hooks/usePlock'
import { getStakingAddress } from '../plock/utils'

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = bsc.useWallet()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getBalance(ethereum, tokenAddress, account)
      setBalance(new BigNumber(res))
    }

    if (account && ethereum) {
      fetchBalance()
    }
  }, [ account, ethereum, tokenAddress ])

  return balance
}

export const usePoolBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { ethereum }: { ethereum: provider } = bsc.useWallet()
  const plock = usePlock()
  const stakingContract = getStakingAddress(plock)

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getBalance(ethereum, tokenAddress, stakingContract)
      setBalance(new BigNumber(res))
    }

    if (stakingContract && ethereum) {
      fetchBalance()
    }
  }, [ stakingContract, ethereum, tokenAddress ])

  return balance
}

export default useTokenBalance