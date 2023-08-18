import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import router from '@/router/index'
import PageLayout from './layout'
const NoMatch = () => <div>404</div>

declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean
    // 子应用mount函数
    __WUJIE_MOUNT: () => void
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void
    // 子应用无界实例
    __WUJIE: { mount: () => void }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = () => {
    root.render(
      <>
        <StrictMode>
          <Router basename="/react-build">
            <Routes>
              <Route path="/" element={<PageLayout />}>
                {router.map((route) => {
                  return <Route path={`${route.key}`} element={route.component} key={route.name} />
                })}
              </Route>

              {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>
          </Router>
        </StrictMode>
      </>,
    )
  }
  window.__WUJIE_UNMOUNT = () => {
    root.unmount()
  }
} else {
  root.render(
    <>
      <StrictMode>
        <div>REACT PAGE</div>
        <Router basename="/react-build">
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<div>123</div>} />
              {router.map((route) => {
                return <Route path={`${route.key}`} element={route.component} key={route.name} />
              })}
            </Route>

            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </Router>
      </StrictMode>
    </>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
