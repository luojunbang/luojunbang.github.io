export const token = 'UnVaX9RcoCKpAsGa'

import { r, parseParams } from 'lo-utils'

export function jsonp<T>(url, params: Record<string, any> = {}): Promise<{ data: T }> {
  if (!window) return

  return new Promise((rs, rj) => {
    const _id = 'jsonp_' + r()
    window[_id] = function (res) {
      console.log(res)
      rs({ data: res })
    }
    const script = document.createElement('script')
    const _params = parseParams(params)
    script.src = url + _id + (_params ? '&' : '') + _params
    document.head.append(script)
  })
}
