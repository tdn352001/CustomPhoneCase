import React from 'react'

import { buttonVariants } from '@/components/ui/button'
import { routers } from '@/libs/constants/routers'
import Link from 'next/link'
import SvgIcon from '@/components/ui/svg-icon'
import HeaderNav from '@/components/layout/base/header/nav'

const DesktopNav = () => {
  return (
    <div className="container hidden lg:flex items-center justify-between py-3">
      <Link href={routers.home} aria-label="Tudutus">
        <SvgIcon className="w-[6.375rem] h-[2.5rem]" icon="LogoFull" />
      </Link>
      <HeaderNav />
      <Link className={buttonVariants({ size: 'icon' })} href={routers.wishlist} aria-label="Wishlist">
        <SvgIcon icon="Heart" />
      </Link>
    </div>
  )
}

export default DesktopNav
