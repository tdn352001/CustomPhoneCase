import Link from 'next/link'
import React from 'react'
import { routers } from '@/libs/constants/routers'
import SvgIcon from '@/components/ui/svg-icon'
import History from '@/components/pages/customize/controll-bar/history'

interface HeaderProps {
  history?: boolean
}

const Header = ({ history }: HeaderProps) => {
  return (
    <header className="w-full h-full px-10 flex items-center justify-between bg-primary-02 xl:h-[--header-height]">
      <Link href={routers.home}>
        <SvgIcon className="w-[9rem] h-10 text-white" name="logo" icon={'LogoFull'} />
      </Link>
      {history && <History dark />}
    </header>
  )
}

export default Header
