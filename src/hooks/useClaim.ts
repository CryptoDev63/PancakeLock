import { useCallback } from 'react'
import usePlock from './usePlock'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { claim, getStakingContract } from '../plock/utils'

const useClaim = (pid: number) => {
  const { account }: { account: string } = bsc.useWallet()
  const plock = usePlock()
  const stakingContract = getStakingContract(plock)

  const handleClaim = useCallback(async () => {
    const txHash = await claim(stakingContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, plock])

  return { onClaim: handleClaim }
}

export default useClaim
