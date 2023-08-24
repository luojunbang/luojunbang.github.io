'use client'

import { getUrl } from '@/utils'
import { Suspense, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import WujieReact from 'wujie-react'
import { InstanceofPlugin } from 'wujie-polyfill'
export default function Page() {
  const location = useLocation()
  const navigation = useNavigate()
  const path = location.pathname.replace('/vue-sub', '').replace('/vue', '').replace('/', '')

  WujieReact.bus.$emit('vue-router-change', path)
  const pageUrl = getUrl(9001) + path
  console.log('pageUrl:', pageUrl, !path)
  //   @ts-ignore
  return <WujieReact width="100%" height="100%" name="vue" url={pageUrl} plugins={[InstanceofPlugin()]} />
}
