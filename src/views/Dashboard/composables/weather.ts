import { onMounted, reactive, Ref, ref, watch } from 'vue'

import http from '@/common/http'

import { token } from '@/common/config'

function getweatherInfo(position: string): string {
  // https://api.caiyunapp.com/v2.5/UnVaX9RcoCKpAsGa/121.6544,25.1552/weather.json
  // return http.get(`/v2.5/${token}/${position}/weather.json`)
  return `https://api.caiyunapp.com/v2.5/${token}/${position}/weather.jsonp`
}

import { jsonp } from 'vue-jsonp'

const weather_config = [
  { label: '晴', value: 'CLEAR_DAY', icon: 'qing' },
  { label: '晴', value: 'CLEAR_NIGHT', icon: 'qing' },
  { label: '多云', value: 'PARTLY_CLOUDY_DAY', icon: 'duoyun' },
  { label: '多云', value: 'PARTLY_CLOUDY_NIGHT', icon: 'duoyun' },
  { label: '阴', value: 'CLOUDY', icon: 'yin' },
  { label: '轻度雾霾', value: 'LIGHT_HAZE', icon: 'mai' },
  { label: '中度雾霾', value: 'MODERATE_HAZE', icon: 'mai' },
  { label: '重度雾霾', value: 'HEAVY_HAZE', icon: 'mai' },
  { label: '小雨', value: 'LIGHT_RAIN', icon: 'xiaoyu' },
  { label: '中雨', value: 'MODERATE_RAIN', icon: 'zhongyu' },
  { label: '大雨', value: 'HEAVY_RAIN', icon: 'dayu' },
  { label: '暴雨', value: 'STORM_RAIN', icon: 'baoyu' },
  { label: '雾', value: 'FOG', icon: 'wu' },
  { label: '小雪', value: 'LIGHT_SNOW', icon: 'xiaoxue' },
  { label: '中雪', value: 'MODERATE_SNOW', icon: 'zhongxue' },
  { label: '大雪', value: 'HEAVY_SNOW', icon: 'daxue' },
  { label: '暴雪', value: 'STORM_SNOW', icon: 'baoxue' },
  { label: '浮尘', value: 'DUST', icon: 'shachen' },
  { label: '沙尘', value: 'SAND', icon: 'shachen' },
  { label: '大风', value: 'WIND', icon: 'feng' },
]

interface todayInfo {
  apparent_temperature: number
  temperature: number
  humidity: string
  precipitation: number
  forecast_keypoint: string
  skycon: { label: string; value: string; icon: string }
  precipitation_1h: Array<number>
}

interface dailyTemperature {
  date: string
  max: number
  min: number
  avg: number
}

interface dailySkycon {
  date: string
  label: number
  icon: string
}

interface dailyPrecipitation {
  date: string
  max: number
  min: number
  avg: number
}

export default function useWeather(position: string): any {
  const todayInfo = reactive<todayInfo>({
    apparent_temperature: 0,
    temperature: 26,
    humidity: '0',
    skycon: { label: '晴', value: 'CLEAR_DAY', icon: 'qing' },
    precipitation: 0,
    forecast_keypoint: '--',
    precipitation_1h: [],
  })
  const dailySkyconList = ref<dailySkycon[]>([])
  const dailyTemperatureList = ref<dailyTemperature[]>([])
  const dailyPrecipitationList = ref<dailyPrecipitation[]>([])
  const isWeatherReady = ref<boolean>(false)
  const askWeather = async () => {
    const { result } = await jsonp<{ result: any }>(getweatherInfo(position))
    isWeatherReady.value = true
    const { realtime, minutely, daily, forecast_keypoint } = result
    const { apparent_temperature, temperature, humidity, skycon, precipitation } = realtime
    todayInfo.apparent_temperature = apparent_temperature
    const idx = weather_config.findIndex(i => i.value === skycon)
    if (idx != -1) todayInfo.skycon = weather_config[idx]
    todayInfo.temperature = temperature
    todayInfo.humidity = parseFloat(humidity).toFixed(4)
    todayInfo.forecast_keypoint = forecast_keypoint
    todayInfo.precipitation = precipitation.local.intensity
    todayInfo.precipitation_1h = minutely.precipitation
    dailyPrecipitationList.value = daily.precipitation
    dailyTemperatureList.value = daily.temperature
    dailySkyconList.value = daily.skycon.map(skycon => weather_config[weather_config.findIndex(i => i.value === skycon.value)] || { label: '-', value: '-', icon: '-' })
  }
  onMounted(() => {
    askWeather()
  })
  return {
    isWeatherReady,
    todayInfo,
    dailySkyconList,
    dailyTemperatureList,
    dailyPrecipitationList,
  }
}
