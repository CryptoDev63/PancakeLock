import React from 'react'
import styled from 'styled-components'
import LockDetailItem from './LockDetailItem'

const LockDetail: React.FC = ({ children }) => {
  return (
    <div className="box-2 w-100 position-relative p-0 mt-4">
      <div className=" d-flex justify-content-between px-sm-4 px-2 pt-4 pb-2 mb-2">
        <LockDetailItem title="Total LP tokens" value="18784.38" />
        <LockDetailItem title="Total locked LP tokens" value="18781.8157" />
      </div>                        
      <div className=" d-flex justify-content-between px-sm-4 px-2 pb-4 pt-2">
        <LockDetailItem title="Value" value="18781.8157 LP tokens" />
        <LockDetailItem title="Unlock Date" value="05:30, 1st of Mar 2121" />
      </div>
    </div>
  )
}

export default LockDetail
