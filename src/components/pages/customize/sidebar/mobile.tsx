import { SVGIcon } from '@/assets/svgs'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import SvgIcon from '@/components/ui/svg-icon'
import { useUploadFileMutation } from '@/hooks/queries/assets'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { getServerFile } from '@/libs/utils/get-server-file'
import { cn } from '@/libs/utils/tw-merge'
import { CustomizeTab, customizeActions, customizeSelector } from '@/store/slices/customize'
import React, { ChangeEvent, useRef, useState } from 'react'
import FontColors from './font-colors'
import LayersTab from './layers'
import StickersTab from './stickers'
import FontFamilies from './font-families'
import TemplatesTab from './templates'
import TextTab from './text'
import { Drawer, DrawerContent } from '@/components/ui/drawer'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnClickOutside } from 'usehooks-ts'

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

const BottomBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const controlbar = useAppSelector(customizeSelector.controlBar)
  const activeTab = useAppSelector(customizeSelector.activeTab)

  const container = useRef<HTMLDivElement>(null)
  const drawer = useRef<HTMLDivElement>(null)

  const { addImage } = useKonvaContext()
  const { mutateAsync: uploadFile, isPending } = useUploadFileMutation()

  const dispatch = useAppDispatch()

  const handleSelectFile = () => {
    inputRef.current?.click()
    setDrawerOpen(false)
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

  const drawerContent = (function getTabContent() {
    switch (activeTab) {
      case CustomizeTab.Templates:
        return <TemplatesTab />
      case CustomizeTab.Layers:
        return <LayersTab />
      case CustomizeTab.Text:
        return <TextTab onAddText={() => setDrawerOpen(false)} />
      case CustomizeTab.Stickers:
        return <StickersTab onAddSticker={() => setDrawerOpen(false)} />
      case CustomizeTab.FontFamily:
        return <FontFamilies />
      case CustomizeTab.FontColors:
        return <FontColors />
    }
  })()

  useOnClickOutside(container, () => {
    setDrawerOpen(false)
  })

  return (
    <div className="w-full h-full select-none relative" ref={container}>
      <div className="w-auto h-full px-2  border-t flex relative z-100 bg-primary-03">
        {tabs.map((tab) => {
          const handleClick = () => {
            console.log({ activeTab, tab: tab.name, drawerOpen })
            if (activeTab === tab.name && drawerOpen) {
              setDrawerOpen(false)
            } else {
              dispatch(customizeActions.setActiveTab(tab.name))
              setDrawerOpen(true)
            }
          }

          return (
            <button
              key={tab.name}
              className={cn(
                'flex-1 flex flex-col items-center justify-center gap-2 text-disabled hover:text-primary-02/90',
                tab.name === activeTab && drawerOpen && 'text-primary-02'
              )}
              onClick={handleClick}
            >
              <SvgIcon className="text-[1.5rem] leading-none" icon={tab.icon} />
              <span className="block text-sm">{tab.name}</span>
            </button>
          )
        })}
        <button
          key="Upload"
          className="flex-1 flex flex-col items-center gap-2 text-disabled"
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

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="absolute w-full flex h-auto flex-col bg-background"
            initial={{
              y: '0%',
              opacity: 0,
            }}
            animate={{
              y: '-100%',
              opacity: 1,
            }}
            exit={{
              y: '0%',
              opacity: 0,
            }}
            transition={{
              bounce: 1,
            }}
          >
            <div className="h-[50dvh] py-4 pt-4 pb-14 select-none rounded-t-[10px] border ">{drawerContent}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* <Drawer
        open={drawerOpen}
        onOpenChange={(open) => {
          console.log({ open })
          if (!open) {
            console.log('close')
            setDrawerOpen(open)
          }
        }}
        modal={false}
        // handleOnly={true}
        // shouldScaleBackground={false}
      >
        <DrawerContent>
          <div className="h-[50dvh] pb-14 select-none">{drawerContent}</div>
        </DrawerContent>
      </Drawer> */}
    </div>
  )
}

export default BottomBar
