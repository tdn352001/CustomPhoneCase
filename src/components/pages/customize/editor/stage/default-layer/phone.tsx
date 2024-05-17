import React from 'react'
import useImage from 'use-image'
import { Image as KonvaImage } from 'react-konva'
import { useAppSelector } from '@/hooks/redux'
import { customizeSelector } from '@/store/slices/customize'

const Phone = () => {
  const { width, height, url } = useAppSelector(customizeSelector.selectedPhone)
  const [image] = useImage(url, 'anonymous')

  return <KonvaImage image={image} width={width} height={height} x={0} y={0} />
}

export default Phone
