import React from 'react'
import styled from 'styled-components'

const Banner: React.FC = ({ children }) => {
  return (
    <section className="hero_banner banner-sec banner-v2 banner-v3">
      <div className="container text-center py-4">
        <h1 className="font-40 text-yellow font-extrabold">Pancakelock</h1>
        <p className="font-16">A Trusted and Safu Liquidity locker for the Community</p>
      </div>
    </section>
  )
}

export default Banner
