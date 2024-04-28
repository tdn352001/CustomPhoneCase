import React from 'react'
import Image from 'next/image'
import { Images } from '@/assets/images'
import { Button } from '@/components/ui/button'
import SvgIcon from '@/components/ui/svg-icon'

const LeftBanner = () => {
  return (
    <div className="flex flex-col items-center lg:flex-1 lg:items-start">
      <Image
        className="hidden lg:block w-full h-[clamp(17.5rem,calc((100dvh-4rem)/2),26.25rem)] rounded-[2.5rem] object-cover object-center border border-primary-02"
        quality={100}
        src={Images.bannerLeft}
        alt="banner-left"
        data-aos="fade-up"
        data-aos-once="true"
      />
      <h1 className="text-5xl font-serif whitespace-nowrap lg:mt-5 lg:text-6xl" data-aos="fade-up" data-aos-once="true">
        Unique design
      </h1>
      <p
        className="text-2xl mt-2 whitespace-nowrap lg:text-5xl lg:w-full lg:flex lg:items-center lg:gap-5 lg:mt-3 lg:before:w-[5.25rem] lg:before:h-1 lg:before:bg-primary-02"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-once="true"
      >
        <span>just for your phone</span>
      </p>
      <p
        className="hidden lg:block mt-3 text-base text-disabled"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
      >
        Create your own phone case and express yourself through it.
      </p>
      <div
        className="mt-5 lg:flex lg:items-center lg:gap-2 lg:mt-5"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <Button>Explore more</Button>
        <Button className="hidden lg:inline-flex" size="icon">
          <SvgIcon icon="ChevronRight" size={22} />
        </Button>
      </div>
      <div
        className="hidden lg:flex mt-10 items-center py-2"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <Image
          className="w-[6.875rem] h-[2.875rem] mt-2"
          src={Images.customerTrust}
          alt="Customers select with trust"
        />
        <span className="block mt-3 text-5xl font-serif translate-y-1">
          <span>3</span>
          <span>K+</span>
        </span>
        <span className="block text-base">Customers select with trust</span>
      </div>
    </div>
  )
}

export default LeftBanner
