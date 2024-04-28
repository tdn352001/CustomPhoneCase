import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SvgIcon from '@/components/ui/svg-icon'
import React from 'react'

const History = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-3">
        <Button variant="secondary" size="icon-sm">
          <SvgIcon icon="Undo" />
        </Button>
        <Button variant="secondary" size="icon-sm" disabled>
          <SvgIcon icon="Redo" />
        </Button>
      </div>
      <Separator className="h-5" orientation="vertical" />
      <Button variant="secondary" size="icon-sm">
        <SvgIcon icon="Draft" />
      </Button>
    </div>
  )
}

export default History
