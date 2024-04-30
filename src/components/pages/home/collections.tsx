import React from 'react'
import SvgIcon from '@/components/ui/svg-icon'
import Link from 'next/link'

const collections = [
  { name: 'Collection 1', thumb: '/images/collections/1.jpg', products: 20 },
  {
    name: 'Collection 2',
    thumb: '/images/collections/2.jpg',
    products: 24,
  },
  {
    name: 'Collection 3',
    thumb: '/images/collections/3.jpg',
    products: 25,
  },
]

const Collections = () => {
  return (
    <div className="container flex flex-col gap-10 py-10 lg:py-20">
      <div className="w-full relative">
        <h3 className="text-5xl font-serif flex flex-col items-start gap-2 md:gap-3">
          <span className="block md:text-5xl" data-aos="fade-up">
            Featured
          </span>
          <span className="block pl-20 md:text-8xl md:pl-0" data-aos="fade-up" data-aos-delay="50">
            Collections
          </span>
        </h3>
        <Link
          className="block absolute top-0 right-0 transition-opacity -translate-y-2 hover:opacity-60 md:transform-none"
          href={'#'}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SvgIcon className="w-[4.25rem] h-14 md:w-[6.875rem] md:h-[5.625rem]" icon="ExploreNow" />
        </Link>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 lg:grid-cols-4 lg:grid-rows-[auto]">
        {collections.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 first:[grid-column:1/3] lg:even:flex-col-reverse lg:even:relative lg:even:top-[-20%]"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="flex flex-col gap-1">
              <Link
                href={'#'}
                className="text-base font-medium transition-colors underline underline-offset-1 decoration-transparent hover:decoration-current"
              >
                {item.name}
              </Link>
              <span className="text-sm text-disabled">{item.products} Products</span>
            </div>
            <Link
              className="rounded-[1.25rem] border border-black overflow-hidden relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/15 after:opacity-0 after:transition-colors after:z-10 hover:after:opacity-100 group"
              href={'#'}
            >
              <img
                className="w-full max-h-[24.375rem] object-cover origin-center transition-transform duration-300 ease-in-out group-hover:scale-[1.08]"
                src={item.thumb}
                alt={item.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections
