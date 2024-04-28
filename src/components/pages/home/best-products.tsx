import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cx from 'clsx'
import { buttonVariants } from '@/components/ui/button'
import { routers } from '@/libs/constants/routers'
import { Images } from '@/assets/images'

const BestProducts = () => {
  return (
    <div
      className={cx(
        'container grid grid-cols-1 gap-5 py-10',
        "lg:grid-cols-2 lg:[grid-template-areas:'thumb'_'main'] lg:py-10 lg:max-h-[58.75rem]"
      )}
    >
      <div className="flex-1 flex flex-col items-center lg:items-start">
        <h2 className="text-4xl font-serif text-center lg:text-5xl lg:text-left" data-aos="fade-up" data-aos-delay="50">
          The best selling products offered
        </h2>
        <p
          className="text-sm text-center text-balance mt-2 text-disabled lg:text-base lg:text-left lg:mt-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          With our advanced technology, you can customize a phone case that fits your device perfectly.
        </p>
        <Link
          className={buttonVariants({ className: 'mt-5' })}
          href={routers.products}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Shop now
        </Link>
        <div className="hidden lg:grid grid-cols-2 gap-6 mt-5">
          <Image
            className="w-full"
            src={Images.bestProduct1}
            alt="Best product 1"
            data-aos="fade-up"
            data-aos-delay="150"
          />
          <Image
            className="w-full"
            src={Images.bestProduct2}
            alt="Best product 2"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>
      </div>
      <Image
        className="w-full h-auto aspect-square object-cover rounded-[1.25rem] lg:w-auto lg:h-full lg:[grid-area:thumb]"
        src={Images.bestProductBanner}
        alt="Best product banner"
        data-aos="fade-up"
      />
    </div>
  )
}

export default BestProducts
