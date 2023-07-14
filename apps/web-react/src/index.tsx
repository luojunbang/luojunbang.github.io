import { StrictMode, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './views/App/App'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, HashRouter } from 'react-router-dom'

const NoMatch = () => <div>404</div>

const Leaflet = lazy(() => import('./views/leaflet/index'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <HashRouter>
      {/* <StrictMode> */}
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route
          path="leaflet"
          element={
            <Suspense fallback="loading">
              <Leaflet />
            </Suspense>
          }
        ></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* </StrictMode> */}
    </HashRouter>
  </>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
