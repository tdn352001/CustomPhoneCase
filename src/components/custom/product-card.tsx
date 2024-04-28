import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import cx from 'clsx'
import SvgIcon from '@/components/ui/svg-icon'
import { cn } from '@/libs/utils/tw-merge'

type ProductCardProps = HTMLAttributes<HTMLDivElement> & {
  name: string
  price: number | string
  thumbnail: string
  isFavorite?: boolean
}

const ProductCard = ({ className, name, price, thumbnail, isFavorite, ...props }: ProductCardProps) => {
  return (
    <div className={cn('flex flex-col gap-3 lg:gap-5', className)} data-aos="fade-up" data-aos-delay={0} {...props}>
      <div className="relative w-full p-2 border transition-colors hover:border-primary-02 md:p-3">
        <Link className="block w-full h-auto aspect-[3/4] relative" href={'#'}>
          <img className="block w-full h-full object-cover" loading="lazy" src={thumbnail} alt={name} />
        </Link>
        <button
          className={cn(
            'block absolute top-2 right-2 text-disabled hover:text-primary-02 md:top-3 md:right-3',
            isFavorite && 'text-note-error'
          )}
        >
          <SvgIcon className={cx(isFavorite && 'fill-note-error')} icon="Heart" />
        </button>
      </div>
      <div className="pr-3 flex flex-col gap-2 lg:pr-5">
        <Link className="line-clamp-2 text-base lg:text-xl hover:text-primary-02/80" href={'#'}>
          {name}
        </Link>
        <span className="block text-base font-bold lg:text-xl">{price}$</span>
      </div>
    </div>
  )
}

export default ProductCard
