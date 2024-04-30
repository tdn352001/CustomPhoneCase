import React from 'react'
import SearchProducts from './search'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import cx from 'clsx'
import SvgIcon from '@/components/ui/svg-icon'
import HeaderNav from '@/components/layout/base/header/nav'
import SortBy from '@/components/pages/products/filters/sort-by'
import CommonFilter from '@/components/pages/products/filters/common'

const MobileFilter = () => {
  return (
    <div className="w-full flex items-center gap-3">
      <form className="flex-1" onSubmit={(e) => e.preventDefault()}>
        <SearchProducts />
      </form>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="size-9 rounded-sm" size="icon">
            <SvgIcon icon="FilterAlt" />
          </Button>
        </SheetTrigger>

        <SheetContent className="p-0">
          <div className="w-full">
            <div className="px-5 py-3 border-b">
              <span className="block text-xl font-bold">Filter</span>
            </div>
            <div className="w-full p-5 flex flex-col gap-5">
              <SortBy />
              <CommonFilter />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileFilter
