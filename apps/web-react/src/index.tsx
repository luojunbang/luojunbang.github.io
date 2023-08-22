import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import '@lo/common/reset.scss'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'

import router from '@/router/index'
import PageLayout from './layout'
const NoMatch = () => <div>404</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const basename = process.env.NODE_ENV === 'development' ? '' : '/react-page/'

const render = () => {
  root.render(
    <>
      <StrictMode>
        <Router basename={basename}>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route path="" element={<Navigate to="/utils/colors" />} />
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

if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = render
  window.__WUJIE_UNMOUNT = () => {
    root.unmount()
  }
} else {
  render()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
