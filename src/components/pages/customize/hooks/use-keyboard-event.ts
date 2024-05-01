import { StageData } from '@/components/pages/customize/hooks/context'
import { useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { Key } from 'ts-key-enum'

export const useKonvaKeyboardEvents = (props: StageData) => {
  const { stageRef, removeSelectedItems, selectAllItems, goToPast, goToFuture } = props

  useHotkeys([Key.Delete, Key.Backspace], removeSelectedItems, { preventDefault: true }, [])

  useHotkeys('mod+a', selectAllItems, { preventDefault: true }, [])

  useHotkeys('ctrl+z', goToPast, { preventDefault: true }, [])
  useHotkeys('ctrl+y', goToFuture, { preventDefault: true }, [])
}
