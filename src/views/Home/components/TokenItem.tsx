import React from 'react'
import styled from 'styled-components'

interface IndividualDataProps {
  name: string
  lockedValue: number
  lockedDate: string
  unlockDate: string
}

const StyledLink = styled.a`
  color: ${(props) => props.theme.isDark ? '#232323' : '#ffffff'} !important;
`

const StyledTD = styled.td`
  color: ${(props) => props.theme.isDark ? '#232323' : '#ffffff'} !important;
`

const TokenItem: React.FC<IndividualDataProps> = ({ name, lockedValue, lockedDate, unlockDate }) => {
  return (
    <tr>
      <th scope="row" className="pl-4 font-semibold"><StyledLink href="Token-overview.html" className="text-white">{name}</StyledLink></th>
      <StyledTD>{lockedValue}</StyledTD>
      <StyledTD>{lockedDate}</StyledTD>
      <StyledTD>{unlockDate}</StyledTD>
    </tr>
  )
}

export default TokenItem
