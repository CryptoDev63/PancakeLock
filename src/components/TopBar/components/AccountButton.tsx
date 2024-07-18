import React, { useCallback } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import * as bsc from '@binance-chain/bsc-use-wallet'
import useModal from '../../../hooks/useModal'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'
import Button from '../../Button'
import { useHistory } from 'react-router-dom'
import { getDisplayBalance } from '../../../utils/formatBalance'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const history = useHistory()
  const { reset } = bsc.useWallet()
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />, 'provider')

  const { account, balance } = bsc.useWallet()

  const accountBalalnce = getDisplayBalance(new BigNumber(balance))

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  const handleLockClick = useCallback(() => {
    reset()
  }, [reset])

  const getAccountAddress = () => {
    if (account) {
      var address =
        account.toString().substring(0, 5) +
        '...' +
        account.toString().substr(account.length - 5)
      return address
    }
  }

  return (
    <StyledAccountButton>
      <li className="nav-item">
        <div className="connect-btn mr-4 pl-0">
          { account && <span className="px-sm-3 text-yellow">{accountBalalnce} BNB</span> }
          { !account ?             
            <button className="btn btn-primary btn-sm px-sm-4 px-1 py-2" onClick={handleUnlockClick} >Connect Wallet</button>
            : 
            <button className="btn btn-primary btn-sm px-sm-4 px-1 py-2" onClick={handleLockClick} >Disconnect</button>
          }
        </div>
      </li>
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div``

export default AccountButton
