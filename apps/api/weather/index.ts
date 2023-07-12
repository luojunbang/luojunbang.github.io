import { jsonp } from "lo-utils";
import { WeatherResWrapper, WeatherRes } from "./types";

export function fetchWeather(position: string): Promise<WeatherResWrapper> {
  return jsonp<WeatherResWrapper>(
    `https://api.caiyunapp.com/v2.5/UnVaX9RcoCKpAsGa/${position}/weather.jsonp?callback=`
  ).then((res) => {
    if (res.data.status === "ok") {
      return res.data;
    } else {
      throw new Error(res.data.status);
    }
  });
}

export * from "./types";
