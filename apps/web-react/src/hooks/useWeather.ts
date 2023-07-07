import { parseParams, r } from 'lo-utils';
import { useEffect, useState } from 'react';

async function fetchWeatherInfo<T>(position: string) {
  return await jsonp<T>(
    `https://api.caiyunapp.com/v2.5/UnVaX9RcoCKpAsGa/${position}/weather.jsonp?callback=`,
  );
}

export function jsonp<T>(url: string, params: Record<string, any> = {}): Promise<{ data: T }> {
  if (!window) return Promise.reject();

  return new Promise((rs, rj) => {
    const _id: string = 'jsonp_' + r();
    Reflect.defineProperty(window, _id, {
      writable: false,
      configurable: true,
      enumerable: false,
      value: function (res: T) {
        rs({ data: res });
        Reflect.deleteProperty(window, _id);
      },
    });
    const script = document.createElement('script');
    const _params = parseParams(params);
    script.src = url + _id + (_params ? '&' : '') + _params;
    document.head.append(script);
  });
}

export function useWeather(position: string) {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    console.log('mounted');
    async function fetchData(p: string) {
      console.log('fetchData');
      const { data } = await fetchWeatherInfo<{ result: Result }>(p);
      setWeather(data.result);
    }
    fetchData(position);
    return () => {
      console.log('unmounted');
    };
  }, [position]);
  return weather;
}

interface Result {
  realtime: Realtime;
  minutely: Minutely;
  hourly: Hourly;
  daily: Daily;
  primary: number;
  forecast_keypoint: string;
}

interface Daily {
  status: string;
  astro: Astro[];
  precipitation: Precipitation3[];
  temperature: Precipitation3[];
  wind: Wind3[];
  humidity: Precipitation3[];
  cloudrate: Precipitation3[];
  pressure: Precipitation3[];
  visibility: Precipitation3[];
  dswrf: Precipitation3[];
  air_quality: Airquality3;
  skycon: Skycon2[];
  skycon_08h_20h: Skycon2[];
  skycon_20h_32h: Skycon2[];
  life_index: Lifeindex2;
}

interface Lifeindex2 {
  ultraviolet: Ultraviolet2[];
  carWashing: Ultraviolet2[];
  dressing: Ultraviolet2[];
  comfort: Ultraviolet2[];
  coldRisk: Ultraviolet2[];
}

interface Ultraviolet2 {
  date: string;
  index: string;
  desc: string;
}

interface Skycon2 {
  date: string;
  value: string;
}

interface Airquality3 {
  aqi: Aqi3[];
  pm25: Precipitation3[];
}

interface Aqi3 {
  date: string;
  max: Aqi;
  avg: Aqi;
  min: Aqi;
}

interface Wind3 {
  date: string;
  max: Wind;
  min: Wind;
  avg: Wind;
}

interface Precipitation3 {
  date: string;
  max: number;
  min: number;
  avg: number;
}

interface Astro {
  date: string;
  sunrise: Sunrise;
  sunset: Sunrise;
}

interface Sunrise {
  time: string;
}

interface Hourly {
  status: string;
  description: string;
  precipitation: Precipitation2[];
  temperature: Precipitation2[];
  wind: Wind2[];
  humidity: Precipitation2[];
  cloudrate: Precipitation2[];
  skycon: Skycon[];
  pressure: Precipitation2[];
  visibility: Precipitation2[];
  dswrf: Precipitation2[];
  air_quality: Airquality2;
}

interface Airquality2 {
  aqi: Aqi2[];
  pm25: Precipitation2[];
}

interface Aqi2 {
  datetime: string;
  value: Aqi;
}

interface Skycon {
  datetime: string;
  value: string;
}

interface Wind2 {
  datetime: string;
  speed: number;
  direction: number;
}

interface Precipitation2 {
  datetime: string;
  value: number;
}

interface Minutely {
  status: string;
  datasource: string;
  precipitation_2h: number[];
  precipitation: number[];
  probability: number[];
  description: string;
}

interface Realtime {
  status: string;
  temperature: number;
  humidity: number;
  cloudrate: number;
  skycon: string;
  visibility: number;
  dswrf: number;
  wind: Wind;
  pressure: number;
  apparent_temperature: number;
  precipitation: Precipitation;
  air_quality: Airquality;
  life_index: Lifeindex;
}

interface Lifeindex {
  ultraviolet: Ultraviolet;
  comfort: Ultraviolet;
}

interface Ultraviolet {
  index: number;
  desc: string;
}

interface Airquality {
  pm25: number;
  pm10: number;
  o3: number;
  so2: number;
  no2: number;
  co: number;
  aqi: Aqi;
  description: Description;
}

interface Description {
  chn: string;
  usa: string;
}

interface Aqi {
  chn: number;
  usa: number;
}

interface Precipitation {
  local: Local;
  nearest: Nearest;
}

interface Nearest {
  status: string;
  distance: number;
  intensity: number;
}

interface Local {
  status: string;
  datasource: string;
  intensity: number;
}

interface Wind {
  speed: number;
  direction: number;
}
