import DesktopNav from '@/components/layout/base/header/desktop-nav'
import MobileNav from '@/components/layout/base/header/mobile-nav'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-primary-03 shadow-sm">
      <DesktopNav />
      <MobileNav />
    </header>
  )
}

export default Header
