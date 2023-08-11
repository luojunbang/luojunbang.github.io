import { createBrowserRouter } from 'react-router-dom'
import App from '@/views/App/App'
import Layout from '@/layout/index'
// import Leaflet from '@/views/leaflet/index'
// import Three from '@/views/three/index'
import { lazy, Suspense } from 'react'
const Leaflet = lazy(() => import('@/views/leaflet/index'))
const Three = lazy(() => import('@/views/three/index'))
const Webrtc = lazy(() => import('@/views/webrtc/index'))
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: 'webrtc',
    element: (
      <Suspense>
        <Webrtc />
      </Suspense>
    ),
  },
  {
    path: '/map',
    element: <Layout />,
    children: [
      {
        path: 'leaflet',
        element: (
          <Suspense>
            <Leaflet />
          </Suspense>
        ),
      },
      {
        path: 'three',
        element: (
          <Suspense>
            <Three />
          </Suspense>
        ),
      },
    ],
  },
])

export default router
