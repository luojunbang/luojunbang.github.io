'use client'

import { Suspense, useEffect } from 'react'
import { getUrl } from '@/utils'
import dynamic from 'next/dynamic'

const DynamicLazyComponent = dynamic(() => import('@/components/wujie-vue'), {
  ssr: false,
  suspense: true,
})

export default function Page() {
  const url = getUrl(9002)
  return (
    <Suspense>
      <DynamicLazyComponent name="react" url={url} />
    </Suspense>
  )
}
