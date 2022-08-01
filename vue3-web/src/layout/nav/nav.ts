interface routeInfo {
  path: string
  title: string
  children: routeConfig[]
}

export type routeConfig = routeInfo
