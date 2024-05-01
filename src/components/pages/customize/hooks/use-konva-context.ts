import { useContext } from 'react'
import { KonvaContext } from './context'

export const useKonvaContext = () => {
  const context = useContext(KonvaContext)
  if (!context) {
    throw new Error('useKonvaContext must be used within a KonvaProvider')
  }

  return context
}
