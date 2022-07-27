import { r } from 'lo-utils'
import { isRef } from 'vue'

export const addressProps = ['province', 'city', 'country']

type AddressProps = typeof addressProps[number]

export function useAddressSelect(step: AddressProps, values: string | undefined, optionsRef, optionsKey = 'options') {
  const idx = addressProps.indexOf(step)
  queryOptions(addressProps[idx + 1], values)
    .then(res => {
      if (!optionsRef) return
      if (isRef(optionsRef)) optionsRef.value = res
      else optionsRef = res
    })
    .catch(err => {
      console.log(err)
    })
  const initObj = idx == -1 ? {} : { [step]: values }
  const ans = addressProps.slice(idx + 1).reduce((rs, key, i) => {
    rs[key] = ''
    return rs
  }, initObj)
  return ans
}

function t(wait, ...args) {
  return new Promise(rs => setTimeout(rs, wait * 1000, ...args))
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
