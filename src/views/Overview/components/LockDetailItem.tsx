import React from 'react'
import styled from 'styled-components'

interface LockDetailItemProps {
  title: string
  value: string
}

const LockDetailItem: React.FC<LockDetailItemProps> = ({ title, value }) => {
  return (
    <div className="right-part">
      <h6 className="font-weight-bold text-yellow">{title}</h6>
      <span className="text-gray">{value}</span>
    </div>
  )
}

export default LockDetailItem