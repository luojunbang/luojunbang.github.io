/**
 * Observe an Object, Modify getter & setter
 * To Observe an Array, Override the Array modify method
 * if the value is an Object/Array, continue step 1
 * When the newValue is an Object/Array, conitnue setp 1
 */

import { isUndef, isJSType } from 'lo-utils'

export class Observe {
  constructor(obj: Record<string, any>) {
    if (!isJSType(obj, 'object')) return
    Object.keys(obj).forEach(k => defineProperty(obj, k, obj[k]))
  }
}

const defineProperty = (obj: Record<string, any>, key: string, value: any) => {
  const _deep = (newValue: any) => {
    if (Array.isArray(newValue)) {
      '__proto__' in newValue && (newValue.__proto__ = aryProto)
      return true
    }
    if (isJSType(newValue, 'object')) {
      new Observe(newValue)
      return true
    }
    return void 0
  }
  _deep(value)
  Object.defineProperty(obj, key, {
    get() {
      console.log('GET:', key, value)
      return value
    },
    set(newVal) {
      console.log('SET:', key, ':', value, '->', newVal)
      _deep(newVal)
      value = newVal
    },
  })
}

const arrayMethods = ['push', 'pop', 'unshift', 'shift', 'sort', 'splice']
const aryProto = Object.create(Array.prototype)
arrayMethods.forEach(method => {
  const original = aryProto[method]
  aryProto[method] = function (...args: any[]) {
    const res = original.apply(this, args)
    console.log('Array-', method, '->', ...args)
    return res
  }
})
