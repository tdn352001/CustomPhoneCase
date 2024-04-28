import { assetsService } from '@/services/assets-service'
import { useQuery } from '@tanstack/react-query'

export const useStickerItemQuery = (id?: string | number) => {
  return useQuery({
    queryKey: ['sticker-detail', id],
    queryFn: () => {
      return assetsService.getStickerItem(id!).then((res) => res.data)
    },
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
    enabled: !!id,
  })
}
