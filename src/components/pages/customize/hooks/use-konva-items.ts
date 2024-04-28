import { useAppSelector } from '@/hooks/redux'
import { customizeSelector } from '@/store/slices/customize'

export const useKonvaItems = () => {
  return useAppSelector(customizeSelector.items)
}
