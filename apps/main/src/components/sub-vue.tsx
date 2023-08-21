'use client' // This is a client component 👈🏽

import WujieReact from 'wujie-react'
import { useEffect } from 'react'
const { bus, setupApp, preloadApp, destroyApp } = WujieReact

export default function Page() {
  setupApp({
    name: 'vue',
    url: '//localhost:10888/vue-page/',
    alive: true,
  })
  return <WujieReact width="100%" height="100%" name="vue" sync={true} url="//localhost:10888/vue-page/"></WujieReact>
}
