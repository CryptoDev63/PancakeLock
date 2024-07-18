import React from 'react'
import styled from 'styled-components'
import IndividualData from './IndividualData'

const TotalDatas: React.FC = ({ children }) => {
  return (
    <section className="box-part">
      <div className="container">
        <div className="row">
          <IndividualData title="Total LP Locked Value" value="$ 275,892,17" percent="+8.50" />
          <IndividualData title="Projects Locked" value="44,635" percent="+6.10" />
          <IndividualData title="Total Token Locked Value" value="$ 44,635,447" percent="+3.14" />
        </div>
      </div>
    </section>
  )
}

const StyledCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background:  ${(props) => props.theme.cardbackgroundColor};
  border: 0px;
  border-radius: 28px;
  box-shadow: ${(props) => props.theme.boxshadow};
  width: 320px;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export default TotalDatas


