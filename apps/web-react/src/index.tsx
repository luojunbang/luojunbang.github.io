import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, BrowserRouter, RouterProvider } from 'react-router-dom'

import router from '@/router/index'
import PageLayout from './layout'
const NoMatch = () => <div>404</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}></Route>
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
