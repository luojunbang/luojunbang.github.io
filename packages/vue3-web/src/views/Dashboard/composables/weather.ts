import { onMounted, reactive, Ref, ref, watch } from 'vue'
import { generatorDate } from 'lo-utils'
import { token } from '@/common/config'

function getweatherInfo(position: string): string {
  // https://api.caiyunapp.com/v2.5/UnVaX9RcoCKpAsGa/121.6544,25.1552/weather.json
  // return http.get(`/v2.5/${token}/${position}/weather.json`)
  return `https://api.caiyunapp.com/v2.5/${token}/${position}/weather.jsonp?callback=`
}

import { jsonp } from '@/common/config'

type skycon = {
  label: string
  value: string
  icon: string
}

export function defineConfig<K extends string>(config: Record<K, skycon>) {
  return config
}

const weather_config = defineConfig({
  CLEAR_DAY: { label: '晴', value: 'CLEAR_DAY', icon: 'qing' },
  CLEAR_NIGHT: { label: '晴', value: 'CLEAR_NIGHT', icon: 'qing' },
  PARTLY_CLOUDY_DAY: { label: '多云', value: 'PARTLY_CLOUDY_DAY', icon: 'duoyun' },
  PARTLY_CLOUDY_NIGHT: { label: '多云', value: 'PARTLY_CLOUDY_NIGHT', icon: 'duoyun' },
  CLOUDY: { label: '阴', value: 'CLOUDY', icon: 'yin' },
  LIGHT_HAZE: { label: '轻度雾霾', value: 'LIGHT_HAZE', icon: 'mai' },
  MODERATE_HAZE: { label: '中度雾霾', value: 'MODERATE_HAZE', icon: 'mai' },
  HEAVY_HAZE: { label: '重度雾霾', value: 'HEAVY_HAZE', icon: 'mai' },
  LIGHT_RAIN: { label: '小雨', value: 'LIGHT_RAIN', icon: 'xiaoyu' },
  MODERATE_RAIN: { label: '中雨', value: 'MODERATE_RAIN', icon: 'zhongyu' },
  HEAVY_RAIN: { label: '大雨', value: 'HEAVY_RAIN', icon: 'dayu' },
  STORM_RAIN: { label: '暴雨', value: 'STORM_RAIN', icon: 'baoyu' },
  FOG: { label: '雾', value: 'FOG', icon: 'wu' },
  LIGHT_SNOW: { label: '小雪', value: 'LIGHT_SNOW', icon: 'xiaoxue' },
  MODERATE_SNOW: { label: '中雪', value: 'MODERATE_SNOW', icon: 'zhongxue' },
  HEAVY_SNOW: { label: '大雪', value: 'HEAVY_SNOW', icon: 'daxue' },
  STORM_SNOW: { label: '暴雪', value: 'STORM_SNOW', icon: 'baoxue' },
  DUST: { label: '浮尘', value: 'DUST', icon: 'shachen' },
  SAND: { label: '沙尘', value: 'SAND', icon: 'shachen' },
  WIND: { label: '大风', value: 'WIND', icon: 'feng' },
})

type weatherType = keyof typeof weather_config

const getSkyconDecription = (skycon: weatherType) => {
  return weather_config[skycon] ?? { label: '-', value: '-', icon: '-' }
}

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
    const { data } = await jsonp<Record<string, any>>(getweatherInfo(position))
    isWeatherReady.value = true
    const { realtime, minutely, daily, forecast_keypoint } = data.result
    console.log(data)

    const { apparent_temperature, temperature, humidity, skycon, precipitation } = realtime
    todayInfo.apparent_temperature = apparent_temperature
    todayInfo.skycon = getSkyconDecription(skycon)
    todayInfo.temperature = temperature
    todayInfo.humidity = (parseFloat(humidity) * 100).toFixed(0) + '%'
    todayInfo.forecast_keypoint = forecast_keypoint
    todayInfo.precipitation = precipitation.local.intensity
    todayInfo.precipitation_1h = minutely.precipitation

    dailyPrecipitationList.value = daily.precipitation
    dailyTemperatureList.value = daily.temperature.map((i: { max: number; min: number; date: string }, index: string | number) => {
      return {
        max: ~~i.max,
        min: ~~i.min,
        skycon: getSkyconDecription(daily.skycon[index].value),
        week: generatorDate(i.date.replace('T', ' ').replace('+08', ''), '周a'),
      }
    })
    dailySkyconList.value = daily.skycon.map((i: { value: any }) => getSkyconDecription(i.value))
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
