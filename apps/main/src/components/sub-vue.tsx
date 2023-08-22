'use client' // This is a client component 👈🏽

import WujieReact from 'wujie-react'
import { useEffect } from 'react'
import { getUrl } from '@/utils'
const { bus, setupApp, preloadApp, destroyApp } = WujieReact

export default function Page() {
  const url = getUrl(9001)
  setupApp({
    name: 'vue',
    url,
    alive: true,
  })
  return <WujieReact width="100%" height="100%" name="vue" sync={true} url={url}></WujieReact>
}
