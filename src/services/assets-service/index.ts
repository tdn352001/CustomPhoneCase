import { getApi } from '@/libs/axios'
import axios from 'axios'
import {
  GetFontsRequest,
  GetFontsResponse,
  GetPhotoRequest,
  GetPhotoResponse,
  GetStickerGroupRequest,
  GetStickerGroupResponse,
  GetStickerGroupsRequest,
  GetStickerGroupsResponse,
} from './types'

export const assetsService = {
  async getPhotos(request: GetPhotoRequest) {
    return axios
      .get<GetPhotoResponse>('/api/images', {
        params: request,
      })
      .then((res) => res.data)
  },

  async getStickers(request: GetStickerGroupsRequest) {
    return getApi<GetStickerGroupsResponse>('/stickerGroups', {
      params: request,
    })
  },

  async getStickerItem(id: string | number, request: GetStickerGroupRequest) {
    return getApi<GetStickerGroupResponse>(`/stickers`, { params: request })
  },

  async getFonts(request: GetFontsRequest) {
    return getApi<GetFontsResponse>('/fonts', {
      params: request,
    })
  },
}

export * from './types'
