import WujieReact from 'wujie-react'
const { setupApp, preloadApp } = WujieReact
import { usePathname } from 'next/navigation'
import { getUrl } from '@/utils'

export default function wujie(props) {
  const url = getUrl(9001)
  setupApp({
    name: 'vue',
    url,
    exec: true,
    alive: true,
    //@ts-ignore
    beforeLoad: appWindow => console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`),
    //@ts-ignore
    beforeMount: appWindow => console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`),
    afterMount: appWindow => {
      console.log('setup', pathname, path, appWindow)
    },
  })
  preloadApp({
    name: 'vue',
    url,
  })
  const pathname = usePathname()
  const path = pathname.replace('/vue', '')
  path && WujieReact.bus.$emit('vue-router-change', path)

  const pageUrl = props.url
  return <WujieReact {...props} width="100%" height="100%" url={pageUrl} />
}
