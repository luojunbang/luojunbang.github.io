import { createBrowserRouter } from 'react-router-dom'
import App from '@/views/App/App'
import Layout from '@/layout/index'
// import Leaflet from '@/views/leaflet/index'
// import Three from '@/views/three/index'
import { lazy, Suspense } from 'react'

import { routes } from './routes'
import { deepPriority } from 'lo-utils'

const router: any[] = []
deepPriority(routes, (route) => {
  const _route: any = { ...route }
  const Component = lazy(() => import(`@/views/${route.key}/index.tsx`))
  _route.component = (
    <Suspense>
      <Component />
    </Suspense>
  )
  router.push(_route)
})

export default router
