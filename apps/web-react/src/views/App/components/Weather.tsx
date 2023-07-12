import { useWeather } from '../../../hooks/useWeather'

const gz = '113.459749,23.106402'

function Page() {
  const weather = useWeather(gz)
  return <>{weather?.forecast_keypoint}</>
}

export default Page
