import React from 'react'
import styled from 'styled-components'

interface IndividualDataProps {
  image: string
  title: string
  value: string
}

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const StyledTitle = styled.p`
  color: ${(props) => props.theme.isDark ? '#999999' : '#d0d0d0'};
`

const IndividualData: React.FC<IndividualDataProps> = ({ image, title, value }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <StyledCard className="lock-box">
        <div className="box-img">
          <img src={image} alt="" />
        </div>
        <div className="box-text">
          <p>{title}</p>
          <h3>{value}</h3>
        </div>
      </StyledCard>
    </div>
  )
}

export default IndividualData