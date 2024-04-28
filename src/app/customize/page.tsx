import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

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

export default Page
