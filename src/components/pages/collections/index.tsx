import Title from '@/components/custom/title'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/libs/utils/tw-merge'
import Link from 'next/link'
import React from 'react'
import cx from 'clsx'

const collections = [
  {
    name: 'Collection 1',
    thumb: '/images/collections/1.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur',
    products: 20,
  },
  {
    name: 'Collection 2',
    thumb: '/images/collections/2.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur',
    products: 24,
  },
  {
    name: 'Collection 3',
    thumb: '/images/collections/3.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur',
    products: 25,
  },
  {
    name: 'Collection 1',
    thumb: '/images/collections/1.jpg',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur',
    products: 20,
  },
]

type Props = {
  name: string
  thumb: string
  desc: string
}

const CollectionsPage = () => {
  return (
    <div className="container py-5 lg:py-10">
      <Title>Collections</Title>
      <div className="flex flex-col gap-10 py-10 lg:gap-[7.5rem]">
        {collections.map((item, index) => {
          const left = index % 2 === 0

          return (
            <div key={index} className={cx('flex flex-col gap-6 ', left ? 'lg:flex-row' : 'lg:flex-row-reverse')}>
              <div className="w-full relative lg:w-auto lg:flex-1">
                <img
                  data-aos="fade-up"
                  className="w-full max-h-[50dvh] border border-primary-02 rounded-3xl object-cover lg:absolute lg:h-full lg:max-h-none"
                  src={item.thumb}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col gap-5 lg:flex-1 lg:flex-col-reverse lg:gap-10">
                <div>
                  <h4 className="text-2xl py-1 border-b lg:text-4xl lg:py-2" data-aos="fade-up" data-aos-delay="50">
                    {item.name}
                  </h4>
                  <p className="text-sm mt-3 lg:text-base" data-aos="fade-up" data-aos-delay="50">
                    {item.desc}
                  </p>
                  <Link
                    className={cn(buttonVariants({ className: 'mt-5' }))}
                    href={'#'}
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    See more
                  </Link>
                </div>
                <div className="hidden lg:grid grid-cols-2 gap-5">
                  <img className="flex-1" data-aos="fade-up" src={'/images/products/2.png'} alt={item.name} />
                  <img
                    className="flex-1"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    src={'/images/products/1.png'}
                    alt={item.name}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CollectionsPage
