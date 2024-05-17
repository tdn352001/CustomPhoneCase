import { KonvaNodeProps } from '@/libs/types'
import Konva from 'konva'
import { useRef } from 'react'
import { Image as KImage } from 'react-konva'
import useImage from 'use-image'

type KonvaImageProps = KonvaNodeProps

const KonvaImage = (props: KonvaImageProps) => {
  const { ...attrs } = props

  const [image] = useImage(attrs.src, 'anonymous')

  const imageRef = useRef<Konva.Image>(null)

  return <KImage ref={imageRef} image={image} {...(attrs as any)} />
}

export default KonvaImage
