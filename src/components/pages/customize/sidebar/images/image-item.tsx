import React from 'react'
import { UnsplashImage } from '@/libs/types'

interface ImageItemProps {
  image: UnsplashImage
}
const ImageItem = ({ image }: ImageItemProps) => {
  return (
    <div>
      <img loading="lazy" src={image.url} alt={image.description} />
    </div>
  )
}

export default ImageItem
