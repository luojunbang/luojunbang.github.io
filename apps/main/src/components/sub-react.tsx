'use client' // This is a client component 👈🏽

import WujieReact from 'wujie-react'
import { useEffect } from 'react'
const { bus, setupApp, preloadApp, destroyApp } = WujieReact

export default function Page() {
  setupApp({
    name: 'react',
    url: '//localhost:3000/react-build/index.html',
    alive: true,
  })
  return <WujieReact width="100%" height="100%" name="react" sync={true} url="//localhost:3000/react-build/index.html" prefix={{ reactpage: '/react-build/index.html' }}></WujieReact>
}
