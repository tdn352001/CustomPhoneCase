import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { phones } from '@/libs/constants/customize'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useAppSelector } from '@/hooks/redux'
import { authSelectors } from '@/store/slices/auth'
import { useKonvaContext } from '@/components/pages/customize/hooks/use-konva-context'
import { getWorkspacePosition } from '@/components/pages/customize/hooks/use-workspace-position'

const SelectPhone = () => {
  const user = useAppSelector(authSelectors.user)
  const { captureWorkspace } = useKonvaContext()

  const handleSaveImage = () => {
    const url = captureWorkspace()
    if (url) {
      downloadURI(url, 'image.png')
    }
  }

  function downloadURI(uri: string, name: string) {
    var link = document.createElement('a')
    link.download = name
    link.href = uri
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full flex items-center justify-end gap-5">
      <Select
        defaultValue={phones[0].id.toString()}
        onValueChange={() => {
          toast.info('Feature coming soon :v')
        }}
      >
        <SelectTrigger className="w-full h-8 xl:w-4/5 xl:min-w-[12rem] xl:max-w-[29rem] xl:h-9">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {phones.map((phone) => (
            <SelectItem key={phone.id} value={phone.id.toString()}>
              {phone.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button className="rounded-[2.5rem] text-base w-[4.5rem]" size="sm" onClick={handleSaveImage}>
        {user ? 'Save' : 'Print'}
      </Button>
    </div>
  )
}

export default SelectPhone
