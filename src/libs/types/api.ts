export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type BaseQueryParams<T extends string | number = string> = {
  limit?: number
  offset?: number
  sort?: T
  order?: SortOrder
}

export type UnsplashImage = {
  id: string
  url: string
  description: string
  width: number
  height: number
  user: {
    name: string
    url: string
  }
}

export type StickerGroup = {
  id: string
  name: string
  url: string
}

export type StickerItem = {
  sticker_group_id: string
  url: string
}
