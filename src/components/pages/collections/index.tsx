import Title from '@/components/custom/title'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/libs/utils/tw-merge'
import Link from 'next/link'
import React from 'react'

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
      <div>
        {collections.map((item, index) => {
          return (
            <div key={index} className="">
              <img className="" src={item.thumb} alt={item.name} />
              <div>
                <div>
                  <img className="" src={'/images/products/1.png'} alt={item.name} />
                  <img className="" src={'/images/products/2.png'} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <Link className={cn(buttonVariants({}))} href={'#'}>
                  See more
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CollectionsPage
