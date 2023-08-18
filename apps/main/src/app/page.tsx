'use client'
import { useRouter } from 'next/navigation'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const DynamicLazyComponent = dynamic(() => import('../components/sub-react'), {
  ssr: false,
  suspense: true,
})
export default function Page() {
  const router = useRouter()
  const onClick = _ => {
    router.push('/react')
  }
  return <div onClick={onClick}>app</div>
}
