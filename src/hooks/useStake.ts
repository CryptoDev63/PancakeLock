import { useCallback } from 'react'
import usePlock from './usePlock'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { stake, getStakingContract } from '../plock/utils'

const useStake = (pid: number) => {
  const { account }: { account: string } = bsc.useWallet()
  const plock = usePlock()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getStakingContract(plock),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, plock],
  )

  return { onStake: handleStake }
}

export default useStake
