import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Viewport } from 'next'

const Customize = dynamic(() => import('@/components/pages/customize'), {
  ssr: false,
})

const Page = () => {
  return (
    <Suspense>
      <Customize />
    </Suspense>
  )
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default Page
