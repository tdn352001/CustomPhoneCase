import Title from '@/components/custom/title'
import TopFilters from './filters/top'
import React from 'react'
import SideFilter from '@/components/pages/products/filters/side-filter'
import ProductCard from '@/components/custom/product-card'
import Paginate from '@/components/custom/paginate'

const products = [
  {
    name: 'Sea Shell Pattern Phone Case_iPhone Ultra-Impact Case [1522157]',
    price: 15.99,
    thumbnail: '/images/products/1.png',
  },
  {
    name: 'Bow and Polka Dots Phone Case_iPhone Ultra-Impact Case [1502844] Vendor',
    price: 15.99,
    thumbnail: '/images/products/2.png',
  },
  {
    name: 'Collage for Star Girls_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/3.png',
  },
  {
    name: "Harry's Cherry_iPhone Ultra-Impact Case",
    price: 15.99,
    thumbnail: '/images/products/4.png',
    isFavorite: true,
  },
  {
    name: 'Rainbow Cowboy Boot Print_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/5.png',
  },
  {
    name: 'Visual Game 3_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/6.png',
  },
  {
    name: 'Sea Shell Pattern Phone Case_iPhone Ultra-Impact Case [1522157]',
    price: 15.99,
    thumbnail: '/images/products/1.png',
  },
  {
    name: 'Bow and Polka Dots Phone Case_iPhone Ultra-Impact Case [1502844] Vendor',
    price: 15.99,
    thumbnail: '/images/products/2.png',
  },
  {
    name: 'Collage for Star Girls_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/3.png',
  },
  {
    name: "Harry's Cherry_iPhone Ultra-Impact Case",
    price: 15.99,
    thumbnail: '/images/products/4.png',
    isFavorite: true,
  },
  {
    name: 'Rainbow Cowboy Boot Print_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/5.png',
  },
  {
    name: 'Visual Game 3_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/6.png',
  },
]

const ProductsPage = () => {
  return (
    <div className="container py-10">
      <Title>Products</Title>
      <div className="mt-5 grid grid-cols-1 lg:mt-10 lg:grid-cols-[18.5rem,1fr] gap-6">
        <div className="hidden w-full lg:block">
          <SideFilter />
        </div>
        <div className="">
          <div className="flex flex-col-reverse gap-3 lg:flex-row lg:justify-between ">
            <p className="text-sm lg:text-base">Showing 1 - 6 of 24 results</p>
            <TopFilters />
          </div>
          <div className=" mt-5 flex flex-wrap gap-y-5">
            {products.map((product, index) => (
              <ProductCard key={index} className="basis-1/2 md:basis-1/3" data-aos-delay={index * 100} {...product} />
            ))}
          </div>
          <div data-aos="fade-up">
            <Paginate className="mt-5 lg:mt-10" pageCount={5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
