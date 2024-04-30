'use client'

import { useMobileMediaQuery, useTabletMediaQuery } from '@/hooks/device'
import { cn } from '@/libs/utils/tw-merge'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const images = [
  '/images/products/1.png',
  '/images/products/2.png',
  '/images/products/3.png',
  '/images/products/4.png',
  '/images/products/5.png',
  '/images/products/6.png',
]

const ProductCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const isMobile = useMobileMediaQuery()

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({})

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    axis: isMobile ? 'x' : 'y',
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) {
      return
    }

    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="w-full lg:flex-1 lg:w-auto">
      <div className="w-full flex flex-col gap-5 md:flex-row-reverse md:h-[30rem] lg:h-[34.5rem]">
        <div
          className="w-full max-w-[16rem] self-center overflow-hidden md:w-auto md:max-w-none md:flex-1 md:h-[30rem] lg:h-[34.5rem] lg:flex-[3]"
          ref={emblaMainRef}
        >
          <div className="w-full flex gap-4 touch-pan-y [backface-visibility:visible] md:h-full">
            {images.map((image, index) => (
              <div className="flex-shrink-0 basis-full border rounded-2xl h-[20.25rem] md:h-full" key={index}>
                <img className="block w-full h-full object-contain" loading="lazy" src={image} alt="Product " />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden md:w-40 md:h-full lg:w-auto lg:flex-1" ref={emblaThumbsRef}>
          <div className="flex gap-1 md:flex-col md:h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  'basis-1/3 flex-shrink-0 h-[10rem] rounded-xl overflow-hidden md:h-auto',
                  index === selectedIndex && 'bg-grey/20'
                )}
              >
                <button className="block w-full h-full" onClick={() => onThumbClick(index)} type="button">
                  <img className="block w-full h-full object-contain" loading="lazy" src={image} alt="Product " />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel
