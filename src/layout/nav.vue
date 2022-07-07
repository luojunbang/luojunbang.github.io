<template>
  <div class="nav broder-b flex-row-nowrap">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="item in routerNest" :key="item.path">
        <el-menu-item v-if="item.children.length == 0" :index="item.path">{{ item.title }}</el-menu-item>
        <el-sub-menu v-else :index="item.path">
          <template v-slot:title>{{ item.title }}</template>
          <el-menu-item v-for="subitem in item.children" :key="subitem.path" :index="subitem.path">{{ subitem.title }}</el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { navRoutePath } from '@/router'
import { Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
type routeConfig = routeInfo

interface routeInfo {
  path: string
  title: string
  children: routeConfig[]
}
const activeIndex: Ref = ref('1')
const router = useRouter()
function handleSelect(e) {
  console.log(e)
  activeIndex.value = e
  router.push('/' + e)
}

function filePathToNest(pathList: string[][]): routeConfig[] {
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

const routerNest = filePathToNest(navRoutePath)
console.log(routerNest)
</script>

<style lang="scss" scoped>
.nav {
  height: 80px;
}
</style>
