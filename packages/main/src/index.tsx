import React from 'react'
import ReactDOM from 'react-dom/client'
import Garfish from 'garfish'
const App = () => {
  return <div>Main</div>
}

const SubApp = () => {
  return <div id="subapp-container" style={{ height: '200px' }}></div>
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
    <SubApp />
  </React.StrictMode>,
)

Garfish.run({
  basename: '/',
  domGetter: '#subapp-container',
  apps: [
    {
      name: 'react',
      activeWhen: '/react',
      entry: 'http://localhost:3000', // html入口
    },
  ],
})
