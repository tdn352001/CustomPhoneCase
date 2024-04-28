import { postForm } from '@/libs/axios'
import { UploadItemRequest, UploadItemResponse } from './types'
export * from './types'

const uploadItem = (request: UploadItemRequest) => {
  return postForm<UploadItemResponse>('/item/uploadItem', request)
}

export const itemService = {
  uploadItem,
}
