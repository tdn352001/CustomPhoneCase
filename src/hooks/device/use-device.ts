import { MOBILE_WIDTH, TABLET_WIDTH } from '@/libs/constants/device'
import { useMediaQuery } from 'usehooks-ts'

export type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

export const MobileMediaQuery = `(max-width: ${MOBILE_WIDTH}px)`
export const TabletMediaQuery = `(min-width: ${MOBILE_WIDTH + 1}px) and (max-width: ${TABLET_WIDTH}px)`
export const DesktopMediaQuery = `(min-width: ${TABLET_WIDTH + 1}px)`

export const useDesktopMediaQuery = (
  options: UseMediaQueryOptions = { defaultValue: true, initializeWithValue: false }
) => {
  return useMediaQuery(`(min-width: ${TABLET_WIDTH + 1}px)`, options)
}

export const useTabletMediaQuery = (options: UseMediaQueryOptions = { initializeWithValue: false }) => {
  return useMediaQuery(`(min-width: ${MOBILE_WIDTH}px) and (max-width: ${TABLET_WIDTH}px)`, options)
}

export const useMobileMediaQuery = (options: UseMediaQueryOptions = { initializeWithValue: false }) => {
  return useMediaQuery(`(max-width: ${MOBILE_WIDTH}px)`, options)
}

export const useLargeDevice = () => {
  return useMediaQuery('(min-width: 1280px)')
}
