import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './views/App/App'
import Three from './views/three/index'
import Leaflet from './views/leaflet/index'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, BrowserRouter, RouterProvider } from 'react-router-dom'

import router from '@/router/index'
const NoMatch = () => <div>404</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
      {/* <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="map">
            <Route path="leaflet" element={<Leaflet />}></Route>
            <Route path="three" element={<Three />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes> */}
    </StrictMode>
  </>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
