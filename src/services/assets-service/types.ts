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

export type GetStickerGroupsRequest = {
  limit?: number
  offset?: number
}

export type GetStickerGroupsResponse = {
  data: {
    sticker_groups: StickerGroup[]
    total: number
  }
}

export type GetStickerGroupRequest = {
  limit?: number
  offset?: number
  group_id?: string
}

export type GetStickerGroupResponse = {
  data: {
    stickers: StickerItem[]
    total: number
  }
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
