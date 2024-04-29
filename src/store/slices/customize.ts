import { materials, phones } from '@/libs/constants/customize'
import { KonvaNodeAttributes, Material, PhoneModel } from '@/libs/types'
import { RootState } from '@/store'
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

export enum ControlBars {
  Default,
  Text,
}

export enum CustomizeTab {
  Templates = 'Templates',
  Layers = 'Layers',
  Text = 'Text',
  Stickers = 'Stickers',
  Images = 'Images',
  Upload = 'Upload',
  FontFamily = 'Font Family',
  FontColors = 'Font Color',
}

export type KonvaNodeData = {
  id: string
  className?: 'Image' | 'Text'
  attrs: KonvaNodeAttributes
  children?: ReactNode
}

interface CustomizeState {
  activeTab: CustomizeTab
  controlBar: ControlBars
  selectedPhone: PhoneModel
  material: Material
  stage: {
    width: number
    height: number
  }
  items: KonvaNodeData[]
  interactionNodeIds?: string[]
}

const getMaterial = (modelId: number) => materials.find((item) => item.modelId === modelId)!

const defaultPhone = phones[0]
const defaultMaterial = getMaterial(defaultPhone.id)

const initialState: CustomizeState = {
  activeTab: CustomizeTab.Templates,
  controlBar: ControlBars.Default,
  selectedPhone: defaultPhone,
  material: defaultMaterial,
  stage: {
    width: 2000,
    height: 2000,
  },
  items: [],
}

const customizeSlice = createSlice({
  name: 'customize',
  initialState,
  reducers: {
    initialState: (state, action: PayloadAction<{ phone?: PhoneModel; items?: KonvaNodeData[] }>) => {
      const { phone, items } = action.payload
      if (phone) {
        state.selectedPhone = phone
        state.material = getMaterial(phone.id)
      }
      if (items) {
        state.items = items
      }
    },
    setActiveTab(state, action: PayloadAction<CustomizeTab>) {
      state.activeTab = action.payload
    },
    setControlBar(state, action: PayloadAction<ControlBars>) {
      state.controlBar = action.payload
    },
    setSelectedPhone(state, action: PayloadAction<PhoneModel>) {
      state.selectedPhone = action.payload
      state.material = getMaterial(action.payload.id)
    },
    setStageSize: (state, action: PayloadAction<{ width: number; height: number }>) => {
      state.stage = action.payload
    },
    setItems: (state, action: PayloadAction<KonvaNodeData[]>) => {
      state.items = action.payload
    },
    addItem: (state, action: PayloadAction<Omit<KonvaNodeData, 'id'>>) => {
      state.items.push({
        id: nanoid(),

        ...action.payload,
      })
    },
    updateItem: (state, action: PayloadAction<{ id: string; attrs: KonvaNodeAttributes }>) => {
      const { id, attrs } = action.payload
      state.items = state.items.map((item) => {
        if (item.id === id) {
          item.attrs = {
            ...item.attrs,
            ...attrs,
          }
        }

        return item
      })
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    setInteractionNodeIds: (state, action: PayloadAction<string[]>) => {
      state.interactionNodeIds = action.payload
    },
    resetState: () => initialState,
  },
})

export const customizeSelector = {
  activeTab: (state: RootState) => state.customize.activeTab,
  controlBar: (state: RootState) => state.customize.controlBar,
  selectedPhone: (state: RootState) => state.customize.selectedPhone,
  selectedPhoneUrl: (state: RootState) => state.customize.selectedPhone.url,
  material: (state: RootState) => state.customize.material,
  materialUrl: (state: RootState) => state.customize.material.url,
  items: (state: RootState) => state.customize.items,
  stage: (state: RootState) => state.customize.stage,
  interactionNodeIds: (state: RootState) => state.customize.interactionNodeIds,
  interactionNode: (state: RootState) => {
    const interactionNodeIds = state.customize.interactionNodeIds
    if (!interactionNodeIds) {
      return
    }

    const firstInteractionNodeId = interactionNodeIds[0]

    if (!firstInteractionNodeId) {
      return
    }

    return state.customize.items.find((item) => item.id === firstInteractionNodeId)
  },
}

export const customizeActions = {
  ...customizeSlice.actions,
}

export default customizeSlice
