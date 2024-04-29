'use client'

import { SVGIcon } from '@/assets/svgs'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import FontFamilies from '@/components/pages/customize/sidebar/font-families'
import SvgIcon from '@/components/ui/svg-icon'
import { useUploadFileMutation } from '@/hooks/queries/assets'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { getServerFile } from '@/libs/utils/get-server-file'
import { cn } from '@/libs/utils/tw-merge'
import { CustomizeTab, customizeActions, customizeSelector } from '@/store/slices/customize'
import { ChangeEvent, Suspense, useRef } from 'react'
import FontColors from './font-colors'
import LayersTab from './layers'
import StickersTab, { StickerTabSkeleton } from './stickers'
import TemplatesTab from './templates'
import TextTab from './text'

const tabs: { name: CustomizeTab; icon: SVGIcon }[] = [
  {
    name: CustomizeTab.Templates,
    icon: 'BookmarkStar',
  },
  {
    name: CustomizeTab.Layers,
    icon: 'Layers',
  },
  {
    name: CustomizeTab.Text,
    icon: 'Text',
  },
  {
    name: CustomizeTab.Stickers,
    icon: 'Attach',
  },
]

const Sidebar = () => {
  const activeTab = useAppSelector(customizeSelector.activeTab)

  const { mutateAsync: uploadFile, isPending } = useUploadFileMutation()
  const { addImage } = useKonvaContext()
  const dispatch = useAppDispatch()

  const inputRef = useRef<HTMLInputElement>(null)

  const tabContent = (function getTabContent() {
    switch (activeTab) {
      case CustomizeTab.Templates:
        return <TemplatesTab />
      case CustomizeTab.Layers:
        return <LayersTab />
      case CustomizeTab.Text:
        return <TextTab />
      case CustomizeTab.Stickers:
        return (
          <Suspense fallback={<StickerTabSkeleton />}>
            <StickersTab />
          </Suspense>
        )
      case CustomizeTab.FontFamily:
        return <FontFamilies />
      case CustomizeTab.FontColors:
        return <FontColors />
    }
  })()

  const handleSelectFile = () => {
    inputRef.current?.click()
  }

  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const file = files[0]
      console.log('start upload')
      return uploadFile({
        file,
      })
        .then((res) => {
          const filePath = res.message
          addImage(getServerFile(filePath))
          console.log({ res })
        })
        .catch((err) => {
          console.log({ err })
        })
    }
  }

  return (
    <div className="h-full flex">
      <div className="h-full px-2 py-5 flex flex-col items-center gap-6 border-r">
        {tabs.map((tab) => {
          const handleClick = () => {
            if (tab.name !== activeTab) {
              dispatch(customizeActions.setActiveTab(tab.name))
            }
          }
          return (
            <button
              key={tab.name}
              className={cn(
                'flex flex-col items-center gap-2 text-disabled hover:text-primary-02/90',
                tab.name === activeTab && 'text-primary-02'
              )}
              onClick={handleClick}
            >
              <SvgIcon className="text-[2rem] leading-none" icon={tab.icon} />
              <span className="block text-base">{tab.name}</span>
            </button>
          )
        })}
        <button
          key="Upload"
          className="flex flex-col items-center gap-2 text-disabled"
          onClick={handleSelectFile}
          disabled={isPending}
        >
          <SvgIcon className="text-[2rem] leading-none" icon="UploadAlt" />
          <span className="block text-base">Upload</span>
        </button>
        <input
          className="hidden"
          ref={inputRef}
          type="file"
          name="file"
          accept="image/png, image/jpeg, imgage/jpg, image/svg"
          onChange={handleFileSelected}
        />
      </div>
      <div className="w-[21.25rem] border-r">
        <h1 className="h-[--header-height] flex items-center px-5 border-b text-xl">{activeTab}</h1>
        <div className="h-[calc(100%-var(--header-height))] overflow-hidden">{tabContent}</div>
      </div>
    </div>
  )
}

export default Sidebar
