import { StageData } from '@/components/pages/customize/hooks/context'
import { useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { Key } from 'ts-key-enum'

export const useKonvaKeyboardEvents = (props: StageData) => {
  const {
    stageRef,
    removeSelectedItems,
    selectAllItems,
    goToPast,
    goToFuture,
    moveToLeft,
    moveToRight,
    moveToBottom,
    moveToTop,
  } = props

  useHotkeys('mod+a', selectAllItems, { preventDefault: true }, [])
  useHotkeys('ctrl+z', goToPast, { preventDefault: true }, [])
  useHotkeys('ctrl+y', goToFuture, { preventDefault: true }, [])

  useHotkeys([Key.Delete, Key.Backspace], removeSelectedItems, { preventDefault: true }, [])
  useHotkeys(Key.ArrowLeft, moveToLeft, { preventDefault: true }, [])
  useHotkeys(Key.ArrowRight, moveToRight, { preventDefault: true }, [])
  useHotkeys(Key.ArrowDown, moveToBottom, { preventDefault: true }, [])
  useHotkeys(Key.ArrowUp, moveToTop, { preventDefault: true }, [])
}
