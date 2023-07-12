import { useEffect, useState } from 'react'
import { fetchWeather } from '@lo/api'

export function useWeather(position: string) {
  const [weather, setWeather] = useState({})
  useEffect(() => {
    console.log('mounted')
    async function fetchData(p: string) {
      console.log('fetchData')
      const { data } = await fetchWeather(p)
      setWeather(data.result)
    }
    fetchData(position)
    return () => {
      console.log('unmounted')
    }
  }, [position])
  return weather
}
