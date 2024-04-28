import SvgIcon from '@/components/ui/svg-icon'
import React from 'react'

const Marquee = () => {
  return (
    <div className="w-full h-[3.75rem] overflow-hidden bg-primary-02 flex items-center relative md:h-20">
      <div className="[--gap:0.25rem] flex items-center animate-out slide-out-to-left-1/4 duration-4000 ease-linear repeat-infinite left-full whitespace-nowrap">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex items-center gap-[--gap] px-[--gap] text-white">
              <span className="block text-base whitespace-nowrap lg:text-xl">EXTRA OFF IN ALL BRANDS</span>
              <SvgIcon className="text-[1.25rem] leading-none lg:text-[1.5rem]" icon="StarFour" />
              <span className="block text-base whitespace-nowrap lg:text-xl">SUMMER SALE</span>
              <SvgIcon className="text-[1.25rem] leading-none lg:text-[1.5rem]" icon="StarFour" />
              <span className="block text-base whitespace-nowrap lg:text-xl">NEW YEAR DISCOUNT</span>
              <SvgIcon className="text-[1.25rem] leading-none lg:text-[1.5rem]" icon="StarFour" />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Marquee
