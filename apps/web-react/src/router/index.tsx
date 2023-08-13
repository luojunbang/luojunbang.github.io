import { createBrowserRouter } from 'react-router-dom'
import App from '@/views/App/App'
import Layout from '@/layout/index'
// import Leaflet from '@/views/leaflet/index'
// import Three from '@/views/three/index'
import { lazy, Suspense } from 'react'
const router = createBrowserRouter([{ path: '/', element: <App /> }])

export default router
