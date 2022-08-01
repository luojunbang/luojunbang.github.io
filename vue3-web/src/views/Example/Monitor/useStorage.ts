type storageType = 'sessionStorage' | 'localStorage' | 'cookies'

class LoStorage {
  appName: string
  type: string

  constructor(appName = '', type: storageType = 'sessionStorage') {
    this.appName = appName
    this.type = type
  }
  private generateKey(key) {
    return `--${this.appName}-${key}`
  }
  get(key) {
    const ans = window[this.type].getItem(this.generateKey(key))
    const { value, expired, createTime } = JSON.parse(ans)
    if (expired?.toString() !== '0' && Date.now() - createTime > expired) {
      this.remove(key)
      return undefined
    }
    return value
  }
  remove(key) {
    window[this.type].removeItem(this.generateKey(key))
  }
  clear() {
    window[this.type].clear()
  }
  set(key, value, expired = 0) {
    window[this.type].setItem(this.generateKey(key), JSON.stringify({ value, expired, createTime: Date.now() }))
  }
}

export default LoStorage

// localStorage_loStorage.set('key', 'value', 10000)
// console.log('localStorage_loStorage.get:', localStorage_loStorage.get('key') === 'value')

// cookies_loStorage.set('key', 'value', 10000)
// console.log('cookies_loStorage.get:', cookies_loStorage.get('key') === 'value')
