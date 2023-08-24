declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean
    // 子应用mount函数
    __WUJIE_MOUNT: () => void
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void
    $wujie: any
  }
}

declare module '*/setting.json' {
  const values: {
    navBar: boolean | number
    menu: boolean
    menuWidth: number
  }

  export default values
}

export {}
