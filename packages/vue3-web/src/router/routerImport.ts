import type { Component } from 'vue'

import type { _RouteRecordBase, RouteRecordRaw, RouteMeta, RouteRecordName, RouteComponent } from 'vue-router'

export declare interface RouteInfo {
  path: string
  href: string
  fullPath?: string
  meta?: RouteMeta
  children?: RouteInfo[]
}

interface RouteConfig extends Record<string, any> {
  meta?: RouteMeta
  params?: string
}

type RouteInfoCallback = (routeInfo: RouteInfo) => any
type routerConfig = Record<string, RouteConfig>

declare interface AIRouteRecordBase extends _RouteRecordBase {
  component?: string | Component | null | undefined
}

/**
 * @description 去掉路径开始的./
 * @param path
 * @returns
 */
const purePathToArray = (path: string | string[]): string[] => (Array.isArray(path) ? path : path.replace(/^\.\//, '').split('/'))

/**
 * @description 判断是否是 DIR\DIR.vue 或者 DIR\index.vue 不区分大小写
 * @param path
 * @returns
 */
const isIndex = (path: string | string[]): boolean => {
  if (purePathToArray(path).length > 2) return false
  return isIndexPath(path)
}

/**
 * @description 判断是否是 *\DIR\DIR.vue 或者 *\DIR\index.vue 不区分大小写
 * @param path
 * @returns
 */
const isIndexPath = (path: string | string[]) => {
  const _path = purePathToArray(path)
  if (_path.length == 1) return isVueFile(_path[0])
  if (_path.length >= 2) {
    const [dir, name] = _path.slice(-2)
    return dir.toLowerCase() + '.vue' === name.toLowerCase() || name.toLowerCase() === 'index.vue'
  }
  return false
}

/**
 * @description
 * @param name
 * @returns
 */
export const isVueFile = (name: string) => /\.vue$/.test(name)

/**
 * @description routerInfo 转化为 vue-router
 * @param route
 * @returns
 */
export function parseRouteInfoToRouteRaw(route: RouteInfo): AIRouteRecordBase {
  return {
    path: route.path,
    component: route.fullPath,
    meta: route.meta,
  }
}

/**
 * @description 自动根据路径生成菜单
 * @param routePath
 * @param routeConfig
 * @param hrefPrefix
 * @returns
 */
export function generateMenuFromFilePath(routePath: string[], hrefPrefix = '', routeConfigCallback: RouteInfoCallback = _ => void 0) {
  return parseRouteConfigToNest(pathToRouteInfo(routePath, hrefPrefix, routeConfigCallback))
}

/**
 *
 * @description 自动根据路径生成vue-router
 * @param routePath
 * @param layoutComponentLists
 * @param routeConfig
 * @param prefix
 * @returns
 */
export function generateRouterFromFilePath(routePath: string[], layoutComponentLists: Component[], routeConfigCallback: RouteInfoCallback = _ => void 0) {
  if (!Array.isArray(layoutComponentLists)) throw Error('Should be Array fo LayoutComponents.')

  const routeObject = pathToRouteInfo(routePath, '', routeConfigCallback)

  const routeRawObject: Record<string, AIRouteRecordBase> = Object.fromEntries(
    Object.entries(routeObject).map(([key, value]) => {
      const _routeRaw = parseRouteInfoToRouteRaw(value)
      return [key, _routeRaw]
    }),
  )

  Object.entries(routeRawObject).forEach(([key, routeRaw]) => {
    if (key.includes('/')) {
      // add layout components
      key.split('/').forEach((path, index, keyAry) => {
        const parentRouteRaw = routeRawObject[keyAry.slice(0, index + 1).join('/')]
        if (parentRouteRaw && parentRouteRaw.component === void 0) {
          parentRouteRaw.component = layoutComponentLists[index]
          parentRouteRaw.redirect = keyAry.slice(0, index + 1).join('/')
        }
      })
    }
  })
  const routes: AIRouteRecordBase[] = parseRouteConfigToNest(routeRawObject)

  return function toCompoennt(importFn: (path: string) => RouteComponent | (() => Promise<RouteComponent>), routeLists?: AIRouteRecordBase[]): RouteRecordRaw[] {
    if (!routeLists) routeLists = routes
    return routeLists.map(i => {
      let children: RouteRecordRaw[] = []
      if (i.children && i.children.length > 0) children = toCompoennt(importFn, i.children)
      return { ...i, children, component: typeof i.component === 'string' ? importFn(i.component) : i.component }
    })
  }
}

export function pathToRouteInfo(routePath: string[], hrefPrefix: string, routeConfigCallback: RouteInfoCallback) {
  const pathList = routePath.filter(isIndexPath).map(purePathToArray)
  const ans: Record<string, RouteInfo> = {}
  let idx = 0
  while (pathList.some(i => i[idx] !== void 0)) {
    pathList.forEach(path => {
      if (!path[idx] || isVueFile(path[idx])) return // 筛选重复导入 xx/index.vue
      const key = path.slice(0, idx + 1).join('/')

      if (!ans[key]) {
        const routeInfo: RouteInfo = {
          path: path[idx],
          href: hrefPrefix + key,
        }
        if (isIndex(path.slice(idx))) {
          routeInfo.fullPath = hrefPrefix + path.join('/')
          routeConfigCallback(routeInfo)
        }
        ans[key] = routeInfo
      }
    })
    idx++
  }
  return ans
}

/**
 * @description 扁平数据转化为树结构 children
 * @param routeConfig
 * @returns
 */
export const parseRouteConfigToNest = (routeConfig: Record<string, any>): any[] => {
  Object.keys(routeConfig).forEach(item => {
    const pathKeyArray = item.split('/')
    const parent = routeConfig[pathKeyArray.slice(0, pathKeyArray.length - 1).join('/')]
    if (parent) {
      if (Array.isArray(parent.children)) {
        parent.children.push(routeConfig[item])
      } else {
        parent.children = [routeConfig[item]]
      }
    }
  })
  return Object.entries(routeConfig)
    .filter(([key, val]) => !key.includes('/'))
    .map(i => i[1])
}
