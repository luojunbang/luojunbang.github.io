import { r, t } from 'lo-utils'
import { isReactive, isRef } from 'vue'

export const addressProps = ['province', 'city', 'country', 'town', 'street']

type AddressProps = typeof addressProps[number]

export function useAddressSelect(step: AddressProps, values: string | undefined, optionsRef: Record<string, any>, optionsKey = 'options') {
  const idx = addressProps.indexOf(step)
  queryOptions(addressProps[idx + 1], values)
    .then(res => {
      if (isRef(optionsRef)) optionsRef.value = res
      else if (isReactive(optionsRef)) optionsRef[optionsKey] = res
    })
    .catch(err => {
      console.log('err:', err)
    })
  const initObj = idx == -1 ? {} : { [step]: values }
  const ans = addressProps.slice(idx + 1).reduce((rs, key, i) => {
    rs[key] = ''
    return rs
  }, initObj)
  return ans
}

export async function queryOptions(step: AddressProps, value = '') {
  if (value == '' && addressProps.indexOf(step) > 0) return []
  return await t(
    1,
    new Array(4).fill(0).map(_ => {
      const _r = r(2)
      return { label: value + '-' + _r, value: step + '-' + _r }
    }),
  )
}
