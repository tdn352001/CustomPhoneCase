'use client'

import SelectPhone from '@/components/pages/customize/controll-bar/select-phone'
import { KonvaProvider, useKonva } from '@/components/pages/customize/hooks/context'
import BottomBar from '@/components/pages/customize/sidebar/mobile'
import { useLargeDevice } from '@/hooks/device'
import { KonvaNodeData } from '@/store/slices/customize'
import ControlBar from './controll-bar'
import Editor from './editor'
import Header from './header'
import Sidebar from './sidebar'

const initialItems: KonvaNodeData[] = []

const CustomizePage = () => {
  const konva = useKonva({ initialItems })

  return (
    <KonvaProvider {...konva}>
      <Main />
    </KonvaProvider>
  )
}

const Main = () => {
  const isDesktop = useLargeDevice()

  if (isDesktop) {
    return (
      <div className="w-full h-full overflow-hidden [--header-height:57px]">
        <Header />
        <div className="flex h-[calc(100dvh-var(--header-height))] flex-col-reverse xl:flex-row">
          <Sidebar />
          <div className="w-[-webkit-fill-available] min-w-[25rem]">
            <ControlBar />
            <div className="w-full h-[calc(100%-var(--header-height))] min-h-[18.75rem] p-4 bg-primary-03">
              <Editor />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-ful h-dvh overflow-hidden grid grid-cols-1 grid-rows-[57px,minmax(0,1fr)]">
      <Header history />
      <div className="w-full h-full grid grid-cols-1 grid-rows-[minmax(0,1fr),57px]">
        <div className="w-full h-full grid grid-cols-1 grid-rows-[64px,minmax(0,1fr)] bg-primary-04">
          <div className="w-full h-full  px-5 flex items-center justify-center">
            <SelectPhone />
          </div>
          <Editor />
        </div>
        <BottomBar />
      </div>
    </div>
  )
}

export default CustomizePage
