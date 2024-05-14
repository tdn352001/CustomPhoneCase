import DefaultLayer from '@/components/pages/customize/editor/stage/default-layer'
import MainLayer from '@/components/pages/customize/editor/stage/main-layer'
import TextArea from '@/components/pages/customize/editor/stage/text-area'
import { useKonvaKeyboardEvents } from '@/components/pages/customize/hooks/use-keyboard-event'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { useStageEvents } from '@/components/pages/customize/hooks/use-stage-events'
import { useStateSize } from '@/components/pages/customize/hooks/use-stage-size'
import { serverLog } from '@/libs/utils/server-log'
import { useEffect } from 'react'
import { Stage as KonvaStage, Layer, Rect } from 'react-konva'

type StageProps = {
  containerWidth: number
  containerHeight: number
}

const Stage = ({ containerWidth, containerHeight }: StageProps) => {
  const { width, height, scale } = useStateSize({ containerWidth, containerHeight })

  const konvaContext = useKonvaContext()

  const { stageRef } = konvaContext

  const stageEvents = useStageEvents(konvaContext)

  useKonvaKeyboardEvents(konvaContext)

  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: width,
        height: height,
        transform: `translate(-50%, -50%) scale(${scale})`,
      }}
    >
      <div className="absolute inset-0 z-50 pointer-events-none select-none overflow-hidden">
        <TextArea />
        {/* <div
          className=" hidden w-40 h-40 absolute top-5 left-5 pointer-events-none bg-red-500"
          ref={interactionBoxRef}
        /> */}
      </div>
      <KonvaStage width={width} height={height} ref={stageRef} {...stageEvents}>
        <DefaultLayer />
        <MainLayer />
      </KonvaStage>
    </div>
  )
}

export default Stage
