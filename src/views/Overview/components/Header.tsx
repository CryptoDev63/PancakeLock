import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const Header: React.FC = ({ children }) => {
  return (
    <StyledCard className="card-header text-center border-bottom-0 pt-4">
      <span className="font-16 font-weight-bold" >Token Overview</span>
    </StyledCard>
  )
}

export default Header
