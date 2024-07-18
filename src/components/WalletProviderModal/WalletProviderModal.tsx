import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as bsc from '@binance-chain/bsc-use-wallet'
import metamaskLogo from '../../assets/img/metamask-fox.svg'
import bscLogo from '../../assets/img/bsc.png'
import trustLogo from '../../assets/img/trustwallet.png'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'
import WalletCard from './components/WalletCard'
import Button from '../Button'

const StyledModal = styled.div`
  min-width: 400px;
`

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect } = bsc.useWallet()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <StyledModal className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-yellow font-weight-bold" id="exampleModalLabel">Connect to a wallet</h5>
          <button type="button" className="close" onClick={onDismiss}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="raido-select">
            <section className="payment-type cf">
              <div onClick={() => connect('injected')}>
                <input type="radio" name="radio3" id="metamask" value="metamask"  checked />
                <label className="col">MetaMask<img src="assets/images/meta-mask.png" className="float-right mr-3" /></label>
              </div>
              <div onClick={() => connect('bsc')}>
                <input type="radio" name="radio3" id="walletconnect" value="walletconnect" />
                <label className="col">Binance Chain Wallet<img src="assets/images/chain-wallet.png" className="float-right mr-3" /></label>
              </div>
            </section>
          </form>
        </div>
      </div>
    </StyledModal>
  )
}

export default WalletProviderModal
