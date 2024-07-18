import { useCallback } from 'react'
import usePlock from './usePlock'
import * as bsc from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { approve, getStakingAddress } from '../plock/utils'

const useApprove = (contract: Contract) => {
  const { account }: { account: string; ethereum: provider } = bsc.useWallet()
  const plock = usePlock()
  const stakingContract = getStakingAddress(plock)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(contract, stakingContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, contract, stakingContract])

  return { onApprove: handleApprove }
}

export default useApprove
