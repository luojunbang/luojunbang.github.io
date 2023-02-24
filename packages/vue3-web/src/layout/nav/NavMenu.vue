<template>
  <template v-for="item in menuList" :key="item.href">
    <el-menu-item v-if="!item.children" :index="item.href">{{ item.meta?.title ?? item.path }}</el-menu-item>
    <el-sub-menu v-else :index="item.href">
      <template v-slot:title>{{ item.meta?.title ?? item.path }}</template>
      <NavMenu :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import type { RouteInfo } from '@/router/routerImport'
const props = defineProps<{
  menuList: RouteInfo[]
}>()
// console.log(props)
</script>
