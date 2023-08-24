'use client'

import { useRouter } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { getUrl } from '@/utils'

const DynamicLazyComponent = dynamic(() => import('@/components/wujie-vue'), {
  ssr: false,
  suspense: true,
})

export default function Page() {
  const router = useRouter()
  const url = getUrl(9001)

  return (
    <Suspense>
      <DynamicLazyComponent name="vue" url={url} />
    </Suspense>
  )
}
