'use client'

import * as Sentry from '@sentry/nextjs'
import Error from 'next/error'
import { useEffect } from 'react'
import { serverLog } from '@/libs/utils/server-log'

export default function GlobalError({ error }) {
  useEffect(() => {
    serverLog(error.message)
    Sentry.captureException(error)
  }, [error])

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  )
}
