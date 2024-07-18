import React from 'react'
import styled from 'styled-components'
import TokenItem from './TokenItem'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const TokenList: React.FC = ({ children }) => {
  return (
    <div className="col-md-8">
      <StyledCard className="table-filter font-14 shadow-sm">
        <div className="px-4 position-relative">
          <button type="submit" className="set-search"><img src="./assets/images/Search.svg" /></button>
          <input className="form-control" id="myInput" type="text" placeholder="Search here.." />
        </div>
        
        <table className="table">
          <thead>
            <tr className="text-yellow font-semibold">
              <th scope="col" className="border-0 pl-4">Token</th>
              <th scope="col" className="border-0">Total LP locked</th>
              <th scope="col" className="border-0">Locked Date</th>
              <th scope="col" className="border-0">Unlock Date</th>
            </tr>
          </thead>
          <tbody id="myTable" className="font-semibold text-primary">
            <TokenItem name="Bitcoin (BTC)" lockedValue={780000} lockedDate="17-03-2021" unlockDate="17-06-2021" />
            <TokenItem name="Ethereum (ETH)" lockedValue={180000} lockedDate="15-03-2021" unlockDate="15-06-2021" />
            <TokenItem name="Binance Coin (BNB)" lockedValue={600000} lockedDate="10-05-2021" unlockDate="12-08-2021" />
            <TokenItem name="Polkadot (DOT)" lockedValue={380000} lockedDate="11-08-2021" unlockDate="18-09-2021" />
            <TokenItem name="Litecoin (LTC)" lockedValue={450000} lockedDate="30-03-2021" unlockDate="08-04-2021" />
            <TokenItem name="Uniswap (UNI)" lockedValue={520000} lockedDate="14-07-2021" unlockDate="11-09-2021" />
            <TokenItem name="Dogecoin (DOGE)" lockedValue={840000} lockedDate="16-04-2021" unlockDate="16-06-2021" />
            <TokenItem name="Huobi Token (HT)" lockedValue={100000} lockedDate="10-02-2021" unlockDate="20-06-2021" />
          </tbody>
        </table>
      </StyledCard>
    </div>
  )
}

export default TokenList
