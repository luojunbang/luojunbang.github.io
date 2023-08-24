import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import '@lo/common/reset.scss'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'

import router from '@/router/index'
import PageLayout from './layout'
import WujieReact from 'wujie-react'
import VuePage from '@/views/vue'
import { getUrl } from './utils'
// const VuePage = lazy(() => import('@/views/vue'))

const NoMatch = () => <div>404</div>
const { setupApp, preloadApp } = WujieReact
/**
 * 大部分业务无需设置 attrs
 * 此处修正 iframe 的 src，是防止github pages csp报错
 * 因为默认是只有 host+port，没有携带路径
 */
const attrs = process.env.NODE_ENV === 'production' ? { src: '/empty.html' } : {}
setupApp({
  exec: true,
  alive: true,
  name: 'vue',
  attrs,
  url: getUrl(9001),
  beforeLoad: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`),
  beforeMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`),
  afterMount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterMount 生命周期`),
  beforeUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} beforeUnmount 生命周期`),
  afterUnmount: (appWindow) => console.log(`${appWindow.__WUJIE.id} afterUnmount 生命周期`),
  activated: (appWindow) => console.log(`${appWindow.__WUJIE.id} activated 生命周期`),
  deactivated: (appWindow) => console.log(`${appWindow.__WUJIE.id} deactivated 生命周期`),
  loadError: (url, e) => console.log(`${url} 加载失败`, e),
})

const render = () => {
  root.render(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            {/* <Route path="vue" element={<VuePage />} /> */}
            <Route path="vue/:path?" element={<VuePage />} />
            <Route path="empty" />
            <Route path="" element={<Navigate to="/utils/colors" />} />
            {router.map((route) => {
              return <Route path={`${route.key}`} element={route.component} key={route.name} />
            })}
          </Route>

          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Router>
    </>,
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
