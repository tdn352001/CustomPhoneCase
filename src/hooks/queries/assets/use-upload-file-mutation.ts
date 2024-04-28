import { itemService } from '@/services/item-service'
import { useMutation } from '@tanstack/react-query'

export const useUploadFileMutation = () => {
  return useMutation({
    mutationFn: itemService.uploadItem,
  })
}
