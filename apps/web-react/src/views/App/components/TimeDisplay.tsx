import { useEffect, useState } from 'react';
import { fmtDateTime } from 'lo-utils';

function TimeDisplay() {
  const [date, setDate] = useState('');

  useEffect(() => {
    console.log('setInterval');
    const id = setInterval(() => {
      setDate(fmtDateTime(Date.now()));
    }, 1000);

    return () => {
      console.log('clearInterval');
      clearInterval(id);
    };
  }, []);

  return <div>{date}</div>;
}

export default TimeDisplay;
