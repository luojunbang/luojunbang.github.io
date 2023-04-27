import { isJSType } from 'lo-utils'

export function generateProxy(obj: any) {
  const handler = {
    get(obj: any, key: any) {
      console.log('PROXY GET: ', key, obj[key])
      return obj[key]
    },
    set(obj: any, key: any, value: any) {
      console.log('PROXY SET: ', key, obj[key], '->', value)
      if (isJSType(value, 'object')) {
        obj[key] = observe(value)
      } else if (isJSType(value, 'array')) {
        obj[key] = generateProxy(value)
      } else {
        obj[key] = value
      }
      return true
    },
  }
  return new Proxy(obj, handler)
}

export function observe(obj: Record<string, any>) {
  Object.keys(obj).forEach(k => {
    if (isJSType(obj[k], 'object')) {
      obj[k] = generateProxy(obj[k])
      observe(obj[k])
    }
    if (isJSType(obj[k], 'array')) {
      obj[k] = generateProxy(obj[k])
    }
  })
  return generateProxy(obj)
}

// get set has
// defineProperty deleteProperty
// getPrototype setPrototypeOf
// new apply
// ownKeys
// preventExtensions isExtensiable
