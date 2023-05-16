import { r, t } from 'lo-utils'
import { isReactive, isRef } from 'vue'

export const addressProps = ['province', 'city', 'country', 'town']

type AddressProps = typeof addressProps[number]

export async function useAddressSelect(step: AddressProps, value: string | undefined, optionsRef: Record<string, any>, optionsKey = 'options') {
  const idx = addressProps.indexOf(step)
  const res = await queryOptions(addressProps[idx + 1], value)
  if (isRef(optionsRef)) optionsRef.value = res
  else if (isReactive(optionsRef)) optionsRef[optionsKey] = res
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
