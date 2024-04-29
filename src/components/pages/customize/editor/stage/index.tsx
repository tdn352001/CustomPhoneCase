import { Stage as KonvaStage } from 'react-konva'
import DefaultLayer from './default-layer'
import MainLayer from './main-layer'
import { useStateSize } from '@/components/pages/customize/hooks/use-stage-size'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { useStageEvents } from '@/components/pages/customize/hooks/use-stage-events'
import TextArea from '@/components/pages/customize/editor/stage/text-area'
import { useEffect } from 'react'

type StageProps = {
  containerWidth: number
  containerHeight: number
}

const Stage = ({ containerWidth, containerHeight }: StageProps) => {
  const { width, height, scale } = useStateSize({ containerWidth, containerHeight })

  const konvaContext = useKonvaContext()

  const { stageRef } = konvaContext

  const stageEvents = useStageEvents(konvaContext)

  useEffect(() => {
    ;(window as any).stage = stageRef.current
  }, [])

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
      </div>
      <KonvaStage width={width} height={height} ref={stageRef} sca {...stageEvents}>
        <DefaultLayer />
        <MainLayer />
      </KonvaStage>
    </div>
  )
}

export default Stage
