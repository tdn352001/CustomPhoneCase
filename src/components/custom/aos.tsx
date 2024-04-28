'use client'

import aos from 'aos'
import { PropsWithChildren, useEffect } from 'react'
import 'aos/dist/aos.css'

const AOS = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    aos.init({
      offset: 120,
    })
  }, [])
  return children
}

export default AOS
