import { useEffect, useState } from 'react'
import { fetchWeather } from '@lo/api'
import { WeatherRes } from '@lo/api'

export function useWeather(position: string) {
  const [weather, setWeather] = useState<WeatherRes>()
  useEffect(() => {
    async function fetchData(p: string) {
      fetchWeather(p)
        .then((res) => {
          setWeather(res.result)
        })
        .catch((err) => {})
    }
    fetchData(position)
    return () => {}
  }, [position])
  return weather
}
