<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <NavMenu :menuList="routerNest" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import type { AIRouteRecordBase } from '@/router/routerImport'
import type { Ref } from 'vue'
import { ref } from 'vue'
import NavMenu from './NavMenu.vue'
import { exampleMenu } from '@/router'

// data
const activeIndex: Ref = ref('dashboard')
const routerNest: AIRouteRecordBase[] = [
  { path: 'Dashboard', name: 'dashboard', component: 'Dashboard/dashboard.vue' },
  { path: 'CssDisplay', name: 'css-display', component: 'CssDisplay/index.vue' },
  { path: 'Components', name: 'carousel', component: 'Carousel/index.vue' },
  { path: 'Example', name: 'example', children: exampleMenu },
]

// methods
</script>

<style lang="scss" scoped></style>
