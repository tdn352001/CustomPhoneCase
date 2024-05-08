import store from '@/store'
import { useMemo } from 'react'

export const useStateSize = ({
  containerWidth,
  containerHeight,
}: {
  containerWidth: number
  containerHeight: number
}) => {
  const stage = store.getState().customize.stage
  const paddingFactor = 0.1 // 10% padding

  const { width, height } = stage

  const scale = useMemo(() => {
    const scaleX = (containerWidth * (1 - paddingFactor)) / width
    const scaleY = (containerHeight * (1 - paddingFactor)) / height
    return Math.min(scaleX, scaleY)
  }, [containerHeight, containerWidth, height, width])

  return {
    width,
    height,
    scale,
  }
}
