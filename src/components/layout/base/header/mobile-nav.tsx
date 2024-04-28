'use client'
import HeaderNav from '@/components/layout/base/header/nav'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SvgIcon from '@/components/ui/svg-icon'
import { routers } from '@/libs/constants/routers'
import Link from 'next/link'
import React, { useState } from 'react'
import cx from 'clsx'

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="container flex items-center justify-between py-3 group lg:hidden" aria-hidden>
      <Link className="w-6 h-8" href={routers.home} aria-label="Tudutus">
        <SvgIcon className="h-full" icon="LogoShort" />
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className={cx(
              '[&_g]:origin-center [&_g]:transition-all [&_g]:duration-200',
              'last:[&_g]:opacity-100 last:[&_g]:scale-0',
              'first:group-data-[state=open]:[&>button>g]:opacity-0 first:group-data-[state=open]:[&>button>g]:scale-0',
              'last:group-data-[state=open]:[&>button>g]:opacity-1 last:group-data-[state=open]:[&>button>g]:scale-100'
            )}
            variant="text"
          >
            <SvgIcon icon="Hamburger" />
          </Button>
        </SheetTrigger>

        <SheetContent className="p-0">
          <div className="w-full">
            <div className="px-5 py-3 border-b">
              <SvgIcon className="w-auto min-w-[5.125rem] h-8" icon="LogoFull" />
            </div>
            <div>
              <HeaderNav onItemClick={() => setOpen(false)} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
