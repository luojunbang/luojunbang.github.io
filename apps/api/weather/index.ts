import { jsonp } from "lo-utils";
import { WeatherRes } from "./types";

export function fetchWeather(position: string) {
  return jsonp<WeatherRes>(
    `https://api.caiyunapp.com/v2.5/UnVaX9RcoCKpAsGa/${position}/weather.jsonp?callback=`
  );
}
