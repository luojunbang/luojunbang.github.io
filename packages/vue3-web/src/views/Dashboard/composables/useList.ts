import { isJSType } from 'lo-utils'
import type { Ref } from 'vue'
import { ref } from 'vue'

export function useList<T>(list: T[]): any {
  const value = ref<T[]>(list) as Ref<T[]>
  const remove = (val: any) => {
    let idx = -1
    if (isJSType(val, 'object')) {
      const _target = Object.entries(val)
      idx = value.value.findIndex((i: T) => _target.every(([key, value]) => (i as any)[key] === value))
    } else {
      idx = value.value.findIndex((i: T) => i === val)
    }
    idx !== -1 && value.value.splice(idx, 1)
  }
  const add = (val: T) => {
    value.value.push(val)
  }
  return { value, remove, add }
}
