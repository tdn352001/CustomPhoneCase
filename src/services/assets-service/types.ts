import { StickerGroup, StickerItem, TypeFace, UnsplashImage } from '@/libs/types'
import { off } from 'process'

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

export type GetFontsRequest = {
  limit?: number
  offset?: number
}

export type GetFontsResponse = {
  data: {
    font_categories: TypeFace[]
    total: number
  }
}
