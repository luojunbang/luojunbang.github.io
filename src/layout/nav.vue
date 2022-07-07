<template>
  <div class="nav broder-b flex-row-nowrap">nav</div>
</template>

<script lang="ts" setup>
import { navRoutePath } from '@/router'
import { Interface } from 'readline'

type routeConfig = routeInfo

interface routeInfo {
  path: string
  title: string
  children: routeConfig[]
}

function filePathToNest(pathList: string[][]): routeConfig[] {
  console.log(pathList)
  const ROOT = '$$__loroot'
  let idx = -1
  const generator = (path: string[]): string[] => {
    if (path.length == 1) return path.map(i => i.replace(/\.vue$/, ''))
    return path[path.length - 1] === 'index.vue' || path[path.length - 1].toLowerCase() === path[path.length - 2].toLowerCase() + '.vue' ? path.slice(0, path.length - 1) : path
  }
  const navConfig2: Map<string, routeConfig> = new Map()
  while (idx++ < pathList.length - 1) {
    const path = generator(pathList[idx])
    if (path.length > 1) {
      if (!navConfig2.get(path[0])) navConfig2.set(path[0], { path: path[0], title: path[0], children: [] })
      const parent_key = path.slice(0, path.length - 1).join('/')
      if (!navConfig2.get(parent_key)) navConfig2.set(parent_key, { path: parent_key, title: parent_key.replace('/', '_'), children: [] })
    }
    navConfig2.set(path.join('/'), { path: path.join('/'), title: path.join('_'), children: [] })
  }
  // console.log(navConfig2)

  const ans: routeConfig[] = []
  for (let pathString of navConfig2.keys()) {
    const path: string[] = generator(pathString.split('/'))
    if (path.length == 0) continue
    const key = path.join('/')
    const currRouter = navConfig2.get(key)
    if (!currRouter) continue
    if (path.length == 1) ans.push(currRouter)
    else {
      const _key = path.slice(0, path.length - 1).join('/')
      const pid = navConfig2.get(_key)
      if (pid !== undefined) pid.children.push(currRouter)
    }
  }
  // console.log(ans)

  return ans
}

filePathToNest(navRoutePath)
</script>

<style lang="scss" scoped>
.nav {
  height: 80px;
}
</style>
