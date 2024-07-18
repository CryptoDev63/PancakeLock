import { useCallback } from 'react'
import usePlock from './usePlock'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { useWallet } from 'use-wallet'
import { unstake, getStakingContract } from '../plock/utils'

const useUnstake = (pid: number) => {
  const { account }: { account: string } = bsc.useWallet()
  const plock = usePlock()
  const stakingContract = getStakingContract(plock)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(stakingContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, plock],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
