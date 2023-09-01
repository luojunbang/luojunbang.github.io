export * from '../utils/url'

export function kl(list: any[], prefix = '') {
  return list
    .filter(Boolean)
    .map((i) => `${prefix}${i}`)
    .join(' ')
}
