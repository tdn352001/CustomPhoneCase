/* eslint-disable react-hooks/exhaustive-deps */
import { getWorkspacePosition } from '@/components/pages/customize/hooks/use-workspace-position'
import { useAppDispatch } from '@/hooks/redux'
import { KonvaSelectionBoxName } from '@/libs/constants/konva'
import { FontAttributes, KonvaNodeAttributes, StickerItem, TypeFace } from '@/libs/types'
import { isKonvaStage, isKonvaText, isKonvaTransformer } from '@/libs/utils/konva/get-node-type'
import { isMetaKey } from '@/libs/utils/konva/is-meta-key'
import store from '@/store'
import { ControlBars, CustomizeTab, KonvaNodeData, customizeActions } from '@/store/slices/customize'
import Konva from 'konva'
import { KonvaEventObject, Node } from 'konva/lib/Node'
import lodash from 'lodash'
import React, { ReactNode, createContext, useEffect, useRef } from 'react'

type StageData = {
  stageRef: React.RefObject<Konva.Stage>
  transformerRef: React.RefObject<Konva.Transformer>
  selectionBoxRef: React.RefObject<Konva.Rect>
  textAreaRef: React.RefObject<HTMLTextAreaElement>
  setItems: (items: KonvaNodeData[]) => void
  getItem: (id: string) => KonvaNodeData | undefined
  addItem: (item: Omit<KonvaNodeData, 'id'>) => void
  addSticker: (item: StickerItem) => void
  addImage: (src: string) => void
  addText: (options: { content?: string; fontSize?: number }) => void
  updateItem: (id: string, attrs: KonvaNodeAttributes) => void
  removeItem: (id: string) => void
  getSelectedItems: () => Node[]
  selectItems: (item: Node | Node[]) => void
  handleSelectItem: (e: KonvaEventObject<Event>) => void
  isFontLoaded: (name: string, attrs?: FontAttributes) => boolean
  loadFont: (name: string, attrs: FontAttributes) => Promise<void>
  loadTypeface: (typeface: TypeFace) => void
}

type UseKonvaOptions = {
  initialItems?: KonvaNodeData[]
}

const fallbackStageData: StageData = {
  stageRef: { current: null },
  transformerRef: { current: null },
  selectionBoxRef: { current: null },
  textAreaRef: { current: null },
  setItems: () => {},
  getItem: () => undefined,
  addItem: () => {},
  addSticker: () => {},
  addImage: () => {},
  addText: () => {},
  updateItem: () => {},
  removeItem: () => {},
  getSelectedItems: () => [],
  selectItems: () => {},
  handleSelectItem: () => {},
  isFontLoaded: () => false,
  loadFont: async () => {},
  loadTypeface: () => {},
}

export const KonvaContext = createContext<StageData>(fallbackStageData)

export type KonvaProviderProps = StageData & {
  children?: ReactNode
}

export const KonvaProvider = (props: KonvaProviderProps) => {
  const { children, ...data } = props

  return <KonvaContext.Provider value={data}>{children}</KonvaContext.Provider>
}

export const useKonva = (options: UseKonvaOptions = {}): StageData => {
  const stageRef = useRef<Konva.Stage>(null)
  const transformerRef = useRef<Konva.Transformer>(null)
  const selectionBoxRef = useRef<Konva.Rect>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const loadedFonts = useRef<Record<string, FontAttributes[]>>({})

  const dispatch = useAppDispatch()

  const setItems = (items: KonvaNodeData[]) => {
    dispatch(customizeActions.setItems(items))
  }

  const getItem = (id: string) => {
    return store.getState().customize.items.find((item) => item.id === id)
  }

  const addItem = (item: Omit<KonvaNodeData, 'id'>) => {
    dispatch(customizeActions.addItem(item))
  }

  const addSticker = (item: StickerItem) => {
    const defaultSize = 300

    const {
      design: { x, y, width, height },
    } = getWorkspacePosition()

    return addItem({
      className: 'Image',
      attrs: {
        x: x + width / 2 - defaultSize / 2,
        y: y + height / 2 - defaultSize / 2,
        width: defaultSize,
        height: defaultSize,
        src: item.sourItemSrc,
      },
    })
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
    dispatch(customizeActions.updateItem({ id, attrs }))
  }

  const removeItem = (id: string) => {
    dispatch(customizeActions.removeItem(id))
  }

  const getSelectedItems = () => {
    const transformer = transformerRef.current

    return transformer?.getNodes() ?? []
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

  const handleSelectItem = (e: KonvaEventObject<Event>) => {
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

  useEffect(() => {
    const initialItems = options.initialItems

    if (initialItems) {
      setItems(initialItems)
      const textItems = initialItems?.filter(
        (item) => item.className === 'Text' && item.attrs.fontFamily && item.attrs.fontAttrs
      )
      console.log({ textItems })

      const textFonts = textItems.map((item) => {
        return {
          fontFamily: item.attrs.fontFamily!,
          attrs: item.attrs.fontAttrs!,
        }
      })

      textFonts.forEach(({ fontFamily, attrs }) => {
        loadFont(fontFamily, attrs).then(() => {
          const items = store.getState().customize.items
          setItems(items)
        })
      })
    }
  }, [])

  return {
    stageRef,
    transformerRef,
    selectionBoxRef,
    textAreaRef,
    setItems,
    getItem,
    addItem,
    addSticker,
    addImage,
    addText,
    updateItem,
    removeItem,
    getSelectedItems,
    selectItems,
    handleSelectItem,
    isFontLoaded,
    loadFont,
    loadTypeface,
  }
}
