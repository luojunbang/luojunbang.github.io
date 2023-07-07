import { useWeather } from '../../../hooks/useWeather';
import { useEffect, useState } from 'react';

const gz = '113.459749,23.106402';

function Page() {
  const weather = useWeather(gz);
  return <>{JSON.stringify(weather)}</>;
}

export default Page;
