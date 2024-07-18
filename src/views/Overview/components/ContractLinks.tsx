import React from 'react'
import styled from 'styled-components'

const ContractLinks: React.FC = ({ children }) => {
  return (
    <div className="text-center mt-3">
      <a href="#" className="btn btn-primary radius1 px-sm-4 px-2 py-2 mr-sm-3 mb-2"><span className="mr-2">BSCScan</span><img src="assets/images/right_arrow_white_small.svg" /></a>
      <a href="#" className="btn btn-line radius1 px-sm-4 px-2 py-2 mb-2 text-yellow"><span className="mr-2">Pancakeswap</span><img src="assets/images/right_arrow_yellow.svg" /></a>
    </div>
  )
}

export default ContractLinks
