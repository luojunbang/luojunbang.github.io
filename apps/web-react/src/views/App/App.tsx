import './App.scss'
import TimeDisplay from './components/TimeDisplay'
import Weather from './components/Weather'

function getweatherInfo(position: string): string {
  return `https://api.caiyunapp.com/v2.6/UnVaX9RcoCKpAsGa/${position}/weather.json`
}

const gz = '113.459749,23.106402'
export async function queryWeatherInfo() {
  const data = await fetch(getweatherInfo(gz)).then((res) => res.json())
  return data
}

export default function Home() {
  return (
    <main className="app">
      <div className="left">
        <div className="left-top relative">
          <div className="">
            <TimeDisplay />
          </div>
        </div>
        <div className="left-bottom relative">
          <div className="">
            <Weather />
          </div>
        </div>
      </div>
      <div className="right"></div>
    </main>
  )
}
