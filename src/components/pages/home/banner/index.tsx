import React from 'react'
import RightBanner from './right-banner'
import LeftBanner from './left-banner'

const Banner = () => {
  return (
    <div className="container flex flex-col gap-10 py-10 lg:flex-row lg:gap-5 lg:pb-20">
      <LeftBanner />
      <RightBanner />
    </div>
  )
}

export default Banner
