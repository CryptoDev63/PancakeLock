import React from 'react'
import styled from 'styled-components'

interface IndividualDataProps {
  title: string
  value: string
  percent: string
}

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.isDark ? '#ffffff' : '#232323'} !important;
`

const StyledTitle = styled.p`
  color: ${(props) => props.theme.isDark ? '#999999' : '#d0d0d0'};
`

const IndividualData: React.FC<IndividualDataProps> = ({ title, value, percent }) => {
  return (
    <div className="col-md-4">
      <StyledCard className="features-inner features-set shadow-sm d-flex">
        <div className="left-part">
          <StyledTitle className=" font-12 text-gray font-weight-normal text-uppercase">{title}</StyledTitle>
          <h2 className="font-20 font-extrabold mb-1">{value}</h2>
        </div>
        <div className="right-part">
          <p className="font-14 text-yellow mb-0 text-center">{percent}%</p>
          <div>
            <canvas id="chLine1" className="graph-canvas-style" />
          </div>
        </div>
      </StyledCard>
    </div>
  )
}

export default IndividualData