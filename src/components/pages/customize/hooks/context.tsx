/* eslint-disable react-hooks/exhaustive-deps */
import { getWorkspacePosition } from '@/components/pages/customize/hooks/use-workspace-position'
import { useAppDispatch } from '@/hooks/redux'
import { KonvaSelectionBoxName } from '@/libs/constants/konva'
import { FontAttributes, KonvaNodeAttributes, StickerItem, TypeFace } from '@/libs/types'
import { isKonvaStage, isKonvaText, isKonvaTransformer } from '@/libs/utils/konva/get-node-type'
import { isMetaKey } from '@/libs/utils/konva/is-meta-key'
import { serverLog } from '@/libs/utils/server-log'
import store from '@/store'
import { ControlBars, CustomizeTab, KonvaNodeData, customizeActions } from '@/store/slices/customize'
import Konva from 'konva'
import { KonvaEventObject, Node } from 'konva/lib/Node'
import lodash from 'lodash'
import React, { ReactNode, createContext, useEffect, useRef } from 'react'

// export type StageData = {
//   stageRef: React.RefObject<Konva.Stage>
//   transformerRef: React.RefObject<Konva.Transformer>
//   selectionBoxRef: React.RefObject<Konva.Rect>
//   textAreaRef: React.RefObject<HTMLTextAreaElement>
//   setItems: (items: KonvaNodeData[]) => void
//   getItem: (id: string) => KonvaNodeData | undefined
//   addItem: (item: Omit<KonvaNodeData, 'id'>) => void
//   addSticker: (item: StickerItem) => void
//   addImage: (src: string) => void
//   addText: (options: { content?: string; fontSize?: number }) => void
//   updateItem: (id: string, attrs: KonvaNodeAttributes) => void
//   removeItem: (id: string) => void
//   removeItems: (ids: string[]) => void
//   getSelectedItems: () => Node[]
//   removeSelectedItems: () => void
//   selectItems: (item: Node | Node[]) => void
//   selectAllItems: () => void
//   handleSelectItem: (e: KonvaEventObject<Event>) => void
//   isFontLoaded: (name: string, attrs?: FontAttributes) => boolean
//   loadFont: (name: string, attrs: FontAttributes) => Promise<void>
//   loadTypeface: (typeface: TypeFace) => void
// }
type UseKonvaOptions = {
  initialItems?: KonvaNodeData[]
}

export const useKonva = (options: UseKonvaOptions = {}) => {
  const stageRef = useRef<Konva.Stage>(null)
  const transformerRef = useRef<Konva.Transformer>(null)
  const selectionBoxRef = useRef<Konva.Rect>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const interactionBoxRef = useRef<HTMLDivElement>(null)

  const loadedFonts = useRef<Record<string, FontAttributes[]>>({})

  const pastRef = useRef([] as KonvaNodeData[][])
  const futureRef = useRef([] as KonvaNodeData[][])

  const dispatch = useAppDispatch()

  const getItems = () => {
    return store.getState().customize.items
  }

  const getItem = (id: string) => {
    return store.getState().customize.items.find((item) => item.id === id)
  }

  const updateWorkFlow = () => {
    const items = getItems()
    pastRef.current.push(items)
    if (pastRef.current.length > 12) {
      pastRef.current.shift()
    }

    futureRef.current = []
    dispatch(customizeActions.setCanUndo(true))
    dispatch(customizeActions.setCanRedo(false))
  }

  const setItems = (items: KonvaNodeData[]) => {
    updateWorkFlow()
    dispatch(customizeActions.setItems(items))
  }

  const addItem = (item: Omit<KonvaNodeData, 'id'>) => {
    updateWorkFlow()
    dispatch(customizeActions.addItem(item))
  }

  const addSticker = (item: StickerItem) => {
    // const defaultSize = 300

    // const {
    //   design: { x, y, width, height },
    // } = getWorkspacePosition()

    // return addItem({
    //   className: 'Image',
    //   attrs: {
    //     x: x + width / 2 - defaultSize / 2,
    //     y: y + height / 2 - defaultSize / 2,
    //     width: defaultSize,
    //     height: defaultSize,
    //     src: item.url,
    //   },
    // })
    addImage(item.url)
  }

  const addImage = (src: string) => {
    return new Promise<void>((resolve, reject) => {
      const image = new Image()
      image.onload = () => {
        const {
          design: { x, y, width: workspaceWidth, height: workspaceHeight },
        } = getWorkspacePosition()

        let imageWidth = image.width
        let imageHeight = image.height

        if (imageWidth > workspaceWidth / 2 || imageHeight > workspaceHeight / 2) {
          imageWidth = imageWidth / 2
          imageHeight = imageHeight / 2
        }

        addItem({
          className: 'Image',
          attrs: {
            x: x + workspaceWidth / 2 - imageWidth / 2,
            y: y + workspaceHeight / 2 - imageHeight / 2,
            width: imageWidth,
            height: imageHeight,
            src,
          },
        })

        resolve()
      }
      image.onerror = () => {
        reject()
      }
      image.src = src
    })
  }

  const addText = ({ content, fontSize }: { content?: string; fontSize?: number }) => {
    const defaultSize = 400

    const {
      design: { x, y, width, height },
    } = getWorkspacePosition()

    return addItem({
      className: 'Text',
      attrs: {
        x: x + width / 2 - defaultSize / 2,
        y: y + height / 2 - defaultSize / 2,
        text: content ?? 'Text',
        fontSize: fontSize ?? 30,
        fill: '#000000',
      },
    })
  }

  const updateItem = (id: string, attrs: KonvaNodeAttributes) => {
    updateWorkFlow()
    dispatch(customizeActions.updateItem({ id, attrs }))
    const items = getItems()
    serverLog(JSON.stringify({ items }, null, 2))
  }

  const removeItem = (id: string) => {
    updateWorkFlow()
    dispatch(customizeActions.removeItem(id))
  }

  const removeItems = (ids: string[]) => {
    updateWorkFlow()
    dispatch(customizeActions.removeItems(ids))
  }

  const getSelectedItems = () => {
    const transformer = transformerRef.current

    return transformer?.getNodes() ?? []
  }

  const removeSelectedItems = () => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length === 0) return
    removeItems(selectedItems.map((item) => item.id() as string))
    selectItems([])
  }

  const selectById = (id: string) => {
    const stage = stageRef.current
    if (!stage) {
      return
    }

    const node = stage.findOne(`#${id}`)
    if (node) {
      selectItems(node)
    }
  }

  const selectItems = (item: Node | Node[]) => {
    const stage = stageRef.current
    const transformer = transformerRef.current

    if (!transformer || !stage) {
      return
    }

    let items = Array.isArray(item) ? item : [item]
    items = items.filter(
      (item) => !isKonvaStage(item) || !isKonvaTransformer(item) || item.name() !== KonvaSelectionBoxName
    )

    items = lodash.uniqWith(items, (item1, item2) => item1.id() === item2.id())
    transformer.setNodes(items)
    transformer.update()
    stage.batchDraw()

    const itemsLength = items.length
    if (itemsLength === 1 && isKonvaText(items[0])) {
      dispatch(customizeActions.setControlBar(ControlBars.Text))
    } else {
      const { controlBar, activeTab } = store.getState().customize
      if (controlBar === ControlBars.Text) {
        dispatch(customizeActions.setControlBar(ControlBars.Default))
      }
      if (activeTab === CustomizeTab.FontFamily || activeTab === CustomizeTab.FontColors) {
        dispatch(customizeActions.setActiveTab(CustomizeTab.Text))
      }
    }
    const interactionNodeIds = items.map((item) => item.id() as string)
    dispatch(customizeActions.setInteractionNodeIds(interactionNodeIds))
  }

  const selectAllItems = () => {
    const stage = stageRef.current
    if (!stage) {
      return
    }

    const layers = stage.getChildren()
    if (!layers) {
      return
    }

    const mainLayers = layers[1]
    if (!mainLayers) {
      return
    }

    const group = mainLayers.getChildren()[0] as Konva.Group
    const nodes = group.getChildren()
    selectItems(nodes)
  }

  const handleSelectItem = (e: KonvaEventObject<Event>) => {
    serverLog('handleSelectItem')
    const selectedItem = getSelectedItems()

    const metaPressed = isMetaKey(e)
    const isSelected = selectedItem.indexOf(e.target) >= 0

    if (!metaPressed && !isSelected) {
      selectItems([e.target])
    } else if (metaPressed && isSelected) {
      const nodes = selectedItem.slice()

      nodes.splice(nodes.indexOf(e.target), 1)
      selectItems(nodes)
    } else if (metaPressed && !isSelected) {
      const nodes = selectedItem.concat([e.target])
      selectItems(nodes)
    }
  }

  const MOVE_STEP = 16

  const moveToLeft = () => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length) {
      console.log({ selectedItems })
      const items = getItems()
      const newItems = items.map((item) => {
        const selectItem = selectedItems.find((selectedItem) => selectedItem.id() === item.id)
        if (selectItem) {
          const x = item.attrs.x || selectItem.x() || 0
          return {
            ...item,
            attrs: {
              ...item.attrs,
              x: x - MOVE_STEP,
            },
          }
        }
        return item
      })
      setItems(newItems)
    }
  }

  const moveToRight = () => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length) {
      const items = getItems()
      const newItems = items.map((item) => {
        const selectItem = selectedItems.find((selectedItem) => selectedItem.id() === item.id)
        if (selectItem) {
          const x = item.attrs.x || selectItem.x() || 0
          return {
            ...item,
            attrs: {
              ...item.attrs,
              x: x + MOVE_STEP,
            },
          }
        }
        return item
      })
      setItems(newItems)
    }
  }

  const moveToTop = () => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length) {
      const items = getItems()
      const newItems = items.map((item) => {
        const selectItem = selectedItems.find((selectedItem) => selectedItem.id() === item.id)
        if (selectItem) {
          const y = item.attrs.y || selectItem.y() || 0
          return {
            ...item,
            attrs: {
              ...item.attrs,
              y: y - MOVE_STEP,
            },
          }
        }
        return item
      })
      setItems(newItems)
    }
  }

  const moveToBottom = () => {
    const selectedItems = getSelectedItems()
    if (selectedItems.length) {
      const items = getItems()
      const newItems = items.map((item) => {
        const selectItem = selectedItems.find((selectedItem) => selectedItem.id() === item.id)
        if (selectItem) {
          const y = item.attrs.y || selectItem.y() || 0
          return {
            ...item,
            attrs: {
              ...item.attrs,
              y: y + MOVE_STEP,
            },
          }
        }
        return item
      })
      setItems(newItems)
    }
  }

  const getLoadedFonts = () => {
    return loadedFonts.current
  }

  const addLoadedFont = (name: string, attrs: FontAttributes) => {
    let font = loadedFonts.current[name]
    if (!font) {
      font = []
      loadedFonts.current[name] = font
    }

    font.push(attrs)
  }

  const isFontLoaded = (name: string, attrs?: FontAttributes) => {
    const loadedFonts = getLoadedFonts()
    const font = loadedFonts[name]
    if (!font) {
      return false
    }

    if (attrs) {
      return font.some((fontAttrs) => lodash.isEqual(fontAttrs, attrs))
    }

    return true
  }

  const loadFont = async (name: string, attrs: FontAttributes) => {
    const isLoaded = isFontLoaded(name, attrs)
    if (!isLoaded) {
      const { url, ...descriptor } = attrs
      const newFont = new FontFace(name, `url("${url}")`, descriptor)
      document.fonts.add(newFont)
      return newFont.load().then((res) => {
        addLoadedFont(name, attrs)
      })
    }
    return Promise.resolve()
  }

  const loadTypeface = (typeface: TypeFace) => {
    const { name, fonts } = typeface
    return fonts.forEach((font) => {
      loadFont(name, font)
    })
  }

  const goToPast = () => {
    const previousItem = pastRef.current.pop()
    console.log({ previousItem })
    if (previousItem) {
      futureRef.current.push(getItems())
      dispatch(customizeActions.setItems(previousItem))
      dispatch(customizeActions.setCanUndo(pastRef.current.length > 0))
      dispatch(customizeActions.setCanRedo(true))
    } else {
      dispatch(customizeActions.setCanUndo(false))
    }
  }

  const goToFuture = () => {
    const nextItem = futureRef.current.pop()
    if (nextItem) {
      pastRef.current.push(getItems())
      dispatch(customizeActions.setItems(nextItem))
      dispatch(customizeActions.setCanUndo(true))
      dispatch(customizeActions.setCanRedo(futureRef.current.length > 0))
    } else {
      dispatch(customizeActions.setCanRedo(false))
    }
  }

  const getWorkspaceNode = () => {
    const stage = stageRef.current
    if (!stage) {
      return
    }

    const layers = stage.getChildren()
    if (!layers) {
      return
    }
    const mainLayers = layers[1]
    if (!mainLayers) {
      return
    }
    const group = mainLayers.getChildren()[0] as Konva.Group
    return group
  }

  const captureWorkspace = () => {
    const workspaceNode = getWorkspaceNode()
    if (!workspaceNode) {
      return
    }

    // const clipFunc = workspaceNode.clipFunc()
    const { workspace: position } = getWorkspacePosition()
    // ;(workspaceNode as any).clipFunc(undefined)
    const url = workspaceNode.toDataURL({
      ...position,
      pixelRatio: 2,
    })
    // workspaceNode.clipFunc(clipFunc)
    return url
  }

  useEffect(() => {
    const initialItems = options.initialItems

    if (initialItems) {
      dispatch(customizeActions.setItems(initialItems))
      const textItems = initialItems?.filter(
        (item) => item.className === 'Text' && item.attrs.fontFamily && item.attrs.fontAttrs
      )

      const textFonts = textItems.map((item) => {
        return {
          nodeId: item.id || item.attrs.id,
          fontFamily: item.attrs.fontFamily!,
          attrs: item.attrs.fontAttrs!,
        }
      })

      textFonts.forEach(({ nodeId, fontFamily, attrs }) => {
        loadFont(fontFamily, attrs)
          .then(() => {
            const stage = stageRef.current
            console.log({
              stage,
              nodeId,
            })
            if (stage && nodeId) {
              const textNode = stage.findOne(`#${nodeId}`) as Konva.Text
              console.log({ textNode })
              if (textNode) {
                textNode.hide()
                textNode.show()
              }
            }
          })
          .catch((err) => {
            console.error(`Load ${fontFamily} error`, err.message)
          })
      })
    }
  }, [])

  return {
    stageRef,
    transformerRef,
    selectionBoxRef,
    textAreaRef,
    interactionBoxRef,
    setItems,
    getItem,
    addItem,
    addSticker,
    addImage,
    addText,
    updateItem,
    removeItem,
    removeItems,
    getSelectedItems,
    removeSelectedItems,
    selectById,
    selectItems,
    selectAllItems,
    handleSelectItem,
    isFontLoaded,
    loadFont,
    loadTypeface,
    goToPast,
    goToFuture,
    moveToLeft,
    moveToRight,
    moveToTop,
    moveToBottom,
    captureWorkspace,
  }
}

export type StageData = ReturnType<typeof useKonva>

export const KonvaContext = createContext<StageData | null>(null)

export type KonvaProviderProps = StageData & {
  children?: ReactNode
}

export const KonvaProvider = (props: KonvaProviderProps) => {
  const { children, ...data } = props

  return <KonvaContext.Provider value={data}>{children}</KonvaContext.Provider>
}
