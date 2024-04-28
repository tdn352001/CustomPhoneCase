import React from 'react'
import useImage from 'use-image'
import { Image as KonvaImage } from 'react-konva'
import { useAppSelector } from '@/hooks/redux'
import { customizeSelector } from '@/store/slices/customize'

const Material = () => {
  const { width, height, url } = useAppSelector(customizeSelector.material)
  const [image] = useImage(url)

  return <KonvaImage image={image} width={width} height={height} x={0} y={0} />
}

export default Material
