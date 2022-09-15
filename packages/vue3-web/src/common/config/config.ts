export const token = 'UnVaX9RcoCKpAsGa'
import LoStorage from '@/views/Example/Monitor/useStorage'
import { r, parseParams } from 'lo-utils'

export function jsonp<T>(url: string, params: Record<string, any> = {}): Promise<{ data: T }> {
  if (!window) return Promise.reject()

  return new Promise((rs, rj) => {
    const _id: string = 'jsonp_' + r()
    Reflect.defineProperty(window, _id, {
      writable: false,
      configurable: true,
      enumerable: false,
      value: function (res: T) {
        rs({ data: res })
        Reflect.deleteProperty(window, _id)
      },
    })
    const script = document.createElement('script')
    const _params = parseParams(params)
    script.src = url + _id + (_params ? '&' : '') + _params
    document.head.append(script)
  })
}

export const storage = new LoStorage('lo', 'localStorage')
