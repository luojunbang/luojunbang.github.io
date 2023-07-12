import { fmtTime } from 'lo-utils'
import { useEffect, useState } from 'react'

function TimeDisplay() {
  const [date, setDate] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setDate(Date.now())
    }, 99)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      {fmtTime(date)}.{Math.floor(date / 100) % 10}
    </div>
  )
}

export default TimeDisplay
