<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <NavMenu :menuList="routerNest" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ElMenu } from 'element-plus'
import { config } from '@/router'
import { Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import NavMenu from './NavMenu.vue'
import { filePathToNest } from '@/router/routerImport'
const activeIndex: Ref = ref('dashboard')

const router = useRouter()

function handleSelect(e) {
  console.log(e)
  activeIndex.value = e
  router.push('/' + e)
}

const navRoutePath = require
  .context('../../views/Example/', true, /\.vue$/)
  .keys()
  .filter(route => {
    const routeAry: string[] = route.split('/').slice(-2)
    if (routeAry.length == 1) return true
    return routeAry[1] === 'index.vue' || routeAry[0].toLocaleLowerCase() === routeAry[1].replace(/\.vue$/, '').toLocaleLowerCase()
  })

const routerNest = [
  {
    path: 'Dashboard',
    title: 'Dashboard',
    children: [],
  },
  {
    path: 'Carousel',
    title: 'Carousel',
    children: [],
  },
  {
    path: '/Example',
    title: '例子',
    children: filePathToNest(navRoutePath, config, 'Example/'),
  },
]
console.log(routerNest)
</script>

<style lang="scss" scoped></style>
