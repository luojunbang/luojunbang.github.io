import React from 'react'
import logo from './logo.svg'
import './App.css'
import WujieReact from 'wujie-react'

function App() {
  const props = {
    jump: (name: any) => {
      console.log(`jump: /${name}`)
    },
  }
  return (
    <div className="App" style={{ height: '600px' }}>
      <div>header</div>
      <WujieReact width="100%" height="100%" name="react" sync={true} url="//localhost:3001" props={props}></WujieReact>
    </div>
  )
}

export default App
