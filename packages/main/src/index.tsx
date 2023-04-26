import React from 'react'
import ReactDOM from 'react-dom'
import Garfish from 'garfish'
const App = () => {
  return <div>Main</div>
}

const SubApp = () => {
  return <div id="root" style={{ height: '200px' }}></div>
}

const root = document.getElementById('root-app')

ReactDOM.render(
  <React.StrictMode>
    <App />
    <SubApp />
  </React.StrictMode>,
  root
)

Garfish.run({
  basename: '/',
  domGetter: '#root',
  apps: [
    {
      name: 'react',
      activeWhen: '/react',
      entry: 'http://localhost:8098', // html入口
    },
    {
      name: 'react-me',
      activeWhen: '/react-me',
      entry: 'http://localhost:3001', // html入口
    },
    {
      name: 'vue',
      activeWhen: '/vue',
      entry: 'http://localhost:8080', // html入口
    },
  ],
})


