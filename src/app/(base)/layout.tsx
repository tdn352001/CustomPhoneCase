import AOS from '@/components/custom/aos'
import Footer from '@/components/layout/base/footer'
import Header from '@/components/layout/base/header'
import React, { PropsWithChildren } from 'react'

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <AOS>
      <div className="overflow-hidden">
        <Header />
        <main className="min-h-dvh">{children}</main>
        <Footer />
      </div>
    </AOS>
  )
}

export default BaseLayout
