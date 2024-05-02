import axios from 'axios'
import {
  GetPhotoRequest,
  GetPhotoResponse,
  GetStickerDetailResponse,
  GetStickersResponse,
  GetFontsRequest,
  GetFontsResponse,
} from './types'
import { getApi } from '@/libs/axios'

export const assetsService = {
  async getPhotos(request: GetPhotoRequest) {
    return axios
      .get<GetPhotoResponse>('/api/images', {
        params: request,
      })
      .then((res) => res.data)
  },

  async getStickers() {
    return axios.get<GetStickersResponse>('/api/stickers').then((res) => res.data)
  },

  async getStickerItem(id: string | number) {
    return axios.get<GetStickerDetailResponse>(`/api/stickers/${id}`).then((res) => res.data)
  },

  async getFonts(request: GetFontsRequest) {
    return getApi<GetFontsResponse>('/fonts', {
      params: request,
    })
  },
}

export * from './types'
