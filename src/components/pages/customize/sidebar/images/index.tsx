import { ScrollArea } from '@/components/ui/scroll-area'
import { useInfiniteImageQuery } from '@/hooks/queries/assets'
import React, { useMemo } from 'react'
import Masonry from 'react-responsive-masonry'
import ImageItem from './image-item'

const ImagesTab = () => {
  const { data } = useInfiniteImageQuery()

  const images = useMemo(() => (data ? data.pages.flatMap((page) => page.data.images) : []), [data])

  return (
    <ScrollArea className="h-full p-2">
      <Masonry columnsCount={2} gutter="0.8rem">
        {images.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
      </Masonry>
    </ScrollArea>
  )
}

export default ImagesTab
