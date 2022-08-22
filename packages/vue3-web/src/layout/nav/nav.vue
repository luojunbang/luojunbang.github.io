<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <NavMenu :menuList="routerNest" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ElMenu } from 'element-plus'
import { routes } from '@/router'
import { Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import NavMenu from './NavMenu.vue'
import { filePathToNest } from '@/router/routerImport'
const activeIndex: Ref = ref('dashboard')

const router = useRouter()

function handleSelect(e: string) {
  activeIndex.value = e
  router.push('/' + e)
}

// const navRoutePath = require
//   .context('../../views/Example/', true, /\.vue$/)
//   .keys()
// routes
const routerNest = [
  { path: 'Dashboard', title: 'Dashboard', href: 'Dashboard', fullPath: 'Dashboard/dashboard.vue' },
  { path: 'CssDisplay', title: 'CssDisplay', href: 'CssDisplay', fullPath: 'CssDisplay/index.vue' },
  { path: 'Carousel', title: 'Carousel', href: 'Carousel', fullPath: 'Carousel/index.vue' },
  { path: 'Components', title: 'Components', href: 'Carousel', fullPath: 'Carousel/index.vue' },
  {
    path: 'Example',
    title: 'Example',
    href: 'Example',
    children: [
      {
        path: 'Charts',
        title: 'Charts',
        href: 'Example/Charts',
        children: [
          { path: 'ECharts', title: 'ECharts', href: 'Example/Charts/ECharts', fullPath: 'Example/Charts/ECharts/index.vue' },
          { path: 'G6', title: 'G6', href: 'Example/Charts/G6', fullPath: 'Example/Charts/G6/index.vue' },
        ],
      },
      { path: 'FormTable', title: 'FormTable', href: 'Example/FormTable', fullPath: 'Example/FormTable/index.vue' },
      { path: 'Image', title: 'Image', href: 'Example/Image', fullPath: 'Example/Image/index.vue' },
      { path: 'Lifecycle', title: 'Lifecycle', href: 'Example/Lifecycle', fullPath: 'Example/Lifecycle/index.vue' },
      { path: 'Monitor', title: 'Monitor', href: 'Example/Monitor', fullPath: 'Example/Monitor/index.vue' },
      {
        path: 'Page1',
        title: 'Page1',
        href: 'Example/Page1',
        children: [
          { path: 'SubPage1', title: 'SubPage1', href: 'Example/Page1/SubPage1', fullPath: 'Example/Page1/SubPage1/SubPage1.vue' },
          {
            path: 'SubPage2',
            title: 'SubPage2',
            href: 'Example/Page1/SubPage2',
            children: [
              { path: 'GrandPage1', title: 'GrandPage1', href: 'Example/Page1/SubPage2/GrandPage1', fullPath: 'Example/Page1/SubPage2/GrandPage1/GrandPage1.vue' },
              { path: 'GrandPage2', title: 'GrandPage2', href: 'Example/Page1/SubPage2/GrandPage2', fullPath: 'Example/Page1/SubPage2/GrandPage2/GrandPage2.vue' },
            ],
          },
        ],
      },
      { path: 'Promise', title: 'Promise', href: 'Example/Promise', fullPath: 'Example/Promise/promise.vue' },
      { path: 'Todos', title: 'Todos', href: 'Example/Todos', fullPath: 'Example/Todos/index.vue' },
      { path: 'Vdom', title: 'Vdom', href: 'Example/Vdom', fullPath: 'Example/Vdom/Vdom.vue' },
      { path: 'demo', title: 'demo', href: 'Example/demo', fullPath: 'Example/demo/demo.vue' },
    ],
  },
]

// console.log(routerNest)
</script>

<style lang="scss" scoped></style>
