export default function Page() {
  const colors = ['484848', '929293']
  const grayLight = ['#ffffff', '#e7eaea', '#dadada', '#b6b6b6', '#919191', '#6d6d6d', '#484848', '#262626', '#141414', '#101010']
  const grayDark = ['#17171a', '#2e2e30', '#484849', '#5f5f60', '#78787a', '#929293', '#ababac', '#c5c5c5', '#dfdfdf', '#f6f6f6']
  function palette(color: string, count = 10): string[] {
    const _rgb = getRGB(color)
    const [h, s, v] = hsv(getRGB(color))
    const hueStep = 2
    const maxSaturationStep = 100
    const minSaturationStep = 9

    const maxValue = 100
    const minValue = 30
    const getNewHue = (isLight: boolean, i: number) => {
      let hue
      if (h >= 60 && h <= 240) {
        hue = isLight ? h - hueStep * i : h + hueStep * i
      } else {
        hue = isLight ? h + hueStep * i : h - hueStep * i
      }
      if (hue < 0) {
        hue += 360
      } else if (hue >= 360) {
        hue -= 360
      }
      return Math.round(hue)
    }
    const getNewSaturation = (isLight: boolean, i: number) => {
      let newSaturation

      if (isLight) {
        newSaturation = s <= minSaturationStep ? s : s - ((s - minSaturationStep) / 5) * i
      } else {
        newSaturation = s + ((maxSaturationStep - s) / 4) * i
      }
      return newSaturation
    }
    const getNewValue = (isLight: boolean, i: number) => {
      return isLight ? v + ((maxValue - v) / 5) * i : v <= minValue ? v : v - ((v - minValue) / 4) * i
    }
    return new Array(10).fill(0).map((_, i) => {
      const isLight = i < 5
      const idx = isLight ? 5 - i : i - 5
      const ret =
        i === 5
          ? color
          : rgb([getNewHue(isLight, idx), getNewSaturation(isLight, idx), getNewValue(isLight, idx)])
              .map((i) => {
                return Math.round(i).toString(16).padStart(2, '0')
              })
              .join('')
      console.log('#' + ret)

      return '#' + ret
    })
  }

  return (
    <>
      <div className="flex">
        {colors.map((color) => (
          <div className="w-[200px]">
            {palette(color).map((i) => (
              <div key={i} style={{ height: '50px', backgroundColor: i }}>
                {i}
              </div>
            ))}
          </div>
        ))}
        <div className="w-[200px]">
          {grayLight.map((i) => (
            <div key={i} style={{ height: '50px', backgroundColor: i }}>
              {i}
            </div>
          ))}
        </div>
        <div className="w-[200px]">
          {grayDark.map((i) => (
            <div key={i} style={{ height: '50px', backgroundColor: i }}>
              {i}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

function getRGB(rgb: string) {
  const ret: number[] = []
  rgb.replace(/\w{2}/g, (val) => {
    ret.push(parseInt(val, 16))
    return val
  })
  return ret
}

function hsv(rgb: number[]) {
  let rdif
  let gdif
  let bdif
  let h = 0
  let s

  const r = rgb[0] / 255
  const g = rgb[1] / 255
  const b = rgb[2] / 255
  const v = Math.max(r, g, b)
  const diff = v - Math.min(r, g, b)
  const diffc = function (c: number) {
    return (v - c) / 6 / diff + 1 / 2
  }

  if (diff === 0) {
    h = 0
    s = 0
  } else {
    s = diff / v
    rdif = diffc(r)
    gdif = diffc(g)
    bdif = diffc(b)

    if (r === v) {
      h = bdif - gdif
    } else if (g === v) {
      h = 1 / 3 + rdif - bdif
    } else if (b === v) {
      h = 2 / 3 + gdif - rdif
    }

    if (h < 0) {
      h += 1
    } else if (h > 1) {
      h -= 1
    }
  }

  return [h * 360, s * 100, v * 100]
}

function rgb(hsv: number[]): number[] {
  const h = hsv[0] / 60
  const s = hsv[1] / 100
  let v = hsv[2] / 100
  const hi = Math.floor(h) % 6

  const f = h - Math.floor(h)
  const p = 255 * v * (1 - s)
  const q = 255 * v * (1 - s * f)
  const t = 255 * v * (1 - s * (1 - f))
  v *= 255

  switch (hi) {
    case 0:
      return [v, t, p]
    case 1:
      return [q, v, p]
    case 2:
      return [p, v, t]
    case 3:
      return [p, q, v]
    case 4:
      return [t, p, v]
    case 5:
      return [v, p, q]
  }
  return []
}
