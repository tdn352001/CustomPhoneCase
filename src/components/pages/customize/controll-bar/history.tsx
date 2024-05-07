import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SvgIcon from '@/components/ui/svg-icon'
import { useAppSelector } from '@/hooks/redux'
import { customizeSelector } from '@/store/slices/customize'
import React from 'react'
import cx from 'clsx'

interface HistoryProps {
  dark?: boolean
}

const History = ({ dark }: HistoryProps) => {
  const canUndo = useAppSelector(customizeSelector.canUndo)
  const canRedo = useAppSelector(customizeSelector.canRedo)

  const { goToPast, goToFuture } = useKonvaContext()

  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-3">
        <Button
          className={cx(dark && 'text-primary-03')}
          variant="secondary"
          size="icon-sm"
          disabled={!canUndo}
          onClick={goToPast}
        >
          <SvgIcon icon="Undo" />
        </Button>
        <Button
          className={cx(dark && 'text-primary-03')}
          variant="secondary"
          size="icon-sm"
          disabled={!canRedo}
          onClick={goToFuture}
        >
          <SvgIcon icon="Redo" />
        </Button>
      </div>
      <Separator className="h-5" orientation="vertical" />
      <Button className={cx(dark && 'text-primary-03')} variant="secondary" size="icon-sm">
        <SvgIcon icon="Draft" />
      </Button>
    </div>
  )
}

export default History
