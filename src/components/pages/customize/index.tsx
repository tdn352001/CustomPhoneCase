'use client'

import { KonvaNodeData } from '@/store/slices/customize'
import ControlBar from './controll-bar'
import Editor from './editor'
import Header from './header'
import Sidebar from './sidebar'
import { KonvaProvider, useKonva } from '@/components/pages/customize/hooks/context'
import { fonts } from '@/libs/constants/customize'

const initialItems: KonvaNodeData[] = [
  {
    id: 'QxiYE-HAI311pw98Nqtx9',
    attrs: {
      id: 'QxiYE-HAI311pw98Nqtx9',
      text: 'Text Shadow!',
      fontFamily: fonts[0].name,
      fontAttrs: fonts[0].fonts[0],
      fontSize: 95,
      x: 300,
      y: 500,
      fill: '#da1414',
      align: 'center',
      fontStyle: 'italic bold',
    },
    className: 'Text',
  },
]

const CustomizePage = () => {
  const konva = useKonva({ initialItems })

  console.log('CustomizePage')
  return (
    <KonvaProvider {...konva}>
      <div className="w-full h-full overflow-hidden [--header-height:57px]">
        <Header />
        <div className="flex h-[calc(100dvh-var(--header-height))]">
          <Sidebar />
          <div className="w-[-webkit-fill-available] min-w-[25rem]">
            <ControlBar />
            <div className="w-full h-[calc(100%-var(--header-height))] min-h-[18.75rem] p-4 bg-primary-03">
              <Editor />
            </div>
          </div>
        </div>
      </div>
    </KonvaProvider>
  )
}

export default CustomizePage
