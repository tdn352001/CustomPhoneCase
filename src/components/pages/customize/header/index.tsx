import Link from 'next/link'
import React from 'react'
import { routers } from '@/libs/constants/routers'
import SvgIcon from '@/components/ui/svg-icon'

const Header = () => {
  return (
    <header className="w-full h-[--header-height] px-10 flex items-center bg-primary-02">
      <Link href={routers.home}>
        <SvgIcon className="w-[9rem] h-10 text-white" name="logo" icon={'LogoFull'} />
      </Link>
    </header>
  )
}

export default Header
