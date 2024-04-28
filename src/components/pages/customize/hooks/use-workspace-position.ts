import store from '@/store'

export const getWorkspacePosition = () => {
  const { selectedPhone, stage, material } = store.getState().customize
  const { width: phoneWidth, height: phoneHeight } = selectedPhone
  const { width: stageWidth, height: stageHeight } = stage
  const { gapTop, gapRight, gapBottom, gapLeft, designPath } = material

  const x = (stageWidth - phoneWidth) / 2
  const y = (stageHeight - phoneHeight) / 2

  return {
    workspace: {
      x,
      y,
      width: phoneWidth,
      height: phoneHeight,
    },
    design: {
      x: gapLeft,
      y: gapTop,
      width: phoneWidth - gapLeft - gapRight,
      height: phoneHeight - gapTop - gapBottom,
      path: designPath,
    },
  }
}

export const useWorkspacePosition = () => {
  return getWorkspacePosition()
}
