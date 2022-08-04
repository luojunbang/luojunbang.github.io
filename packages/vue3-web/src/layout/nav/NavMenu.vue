<template>
  <template v-for="item in menuList" :key="item.href">
    <el-menu-item v-if="!item.children" :index="item.href">{{ item.title }}</el-menu-item>
    <el-sub-menu v-else :index="item.href">
      <template v-slot:title>{{ item.title }}</template>
      <NavMenu v-if="Array.isArray(item.children)" :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import { ElMenuItem, ElSubMenu } from 'element-plus'
import { navRouteConfig } from '@/router/routerImport'
const props = defineProps<{
  menuList: navRouteConfig[]
}>()
// console.log(props)
</script>
