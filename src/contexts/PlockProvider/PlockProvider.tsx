import React, { createContext, useEffect, useState } from 'react'
import * as bsc from '@binance-chain/bsc-use-wallet'

import { Plock } from '../../plock'

export interface PlockContext {
  plock?: typeof Plock
}

export const Context = createContext<PlockContext>({
  plock: undefined,
})

declare global {
  interface Window {
    cropssauce: any
  }
}

const PlockProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = bsc.useWallet()
  const [plock, setPlock] = useState<any>()

  // @ts-ignore
  window.plock = plock
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      console.log("pooh, chainId = ", chainId)
      const plockLib = new Plock(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setPlock(plockLib)
      window.cropssauce = plockLib
    }
  }, [ethereum])

  return <Context.Provider value={{ plock }}>{children}</Context.Provider>
}

export default PlockProvider
