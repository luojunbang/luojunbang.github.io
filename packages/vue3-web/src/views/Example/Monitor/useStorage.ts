type storageType = 'sessionStorage' | 'localStorage' | 'cookies'

class LoStorage {
  appName: string
  type: string

  constructor(appName = '', type: storageType = 'sessionStorage') {
    this.appName = appName
    this.type = type
  }
  private generateKey(key: string) {
    return `--${this.appName}-${key}`
  }
  get(key: string) {
    const { type } = this
    const ans = (window as any)[type].getItem(this.generateKey(key))
    const { value, expired, createTime } = JSON.parse(ans)
    if (expired?.toString() !== '0' && Date.now() - createTime > expired) {
      this.remove(key)
      return undefined
    }
    return value
  }
  remove(key: string) {
    ;(window as any)[this.type]?.removeItem(this.generateKey(key))
  }
  clear() {
    ;(window as any)[this.type]?.clear()
  }
  set(key: string, value: any, expired = 0) {
    ;(window as any)[this.type]?.setItem(this.generateKey(key), JSON.stringify({ value, expired, createTime: Date.now() }))
  }
}

export default LoStorage

// localStorage_loStorage.set('key', 'value', 10000)
// console.log('localStorage_loStorage.get:', localStorage_loStorage.get('key') === 'value')

// cookies_loStorage.set('key', 'value', 10000)
// console.log('cookies_loStorage.get:', cookies_loStorage.get('key') === 'value')
