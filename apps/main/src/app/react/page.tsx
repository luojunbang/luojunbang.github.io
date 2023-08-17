'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const DynamicLazyComponent = dynamic(() => import('@/components/sub-react'), {
  ssr: false,
  suspense: true,
})

export default function Page() {
  return <DynamicLazyComponent />
}
