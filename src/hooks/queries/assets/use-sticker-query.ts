import { assetsService } from '@/services/assets-service'
import { useSuspenseQuery } from '@tanstack/react-query'

export const useStickerQuery = () => {
  return useSuspenseQuery({
    queryKey: ['stickers'],
    queryFn: async () => {
      return assetsService
        .getStickers()
        .then((res) => res.data)
        .catch(() => [])
    },
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  })
}
