import { StickerGroup, StickerItem, UnsplashImage } from '@/libs/types'

export type GetPhotoRequest = {
  page?: number
}

export type GetPhotoResponse = {
  data: {
    images: UnsplashImage[]
    total: number
    page: number
    limit: number
  }
}

export type GetStickersResponse = {
  data: StickerGroup[]
}

export type GetStickerDetailResponse = {
  data: StickerItem[]
}
