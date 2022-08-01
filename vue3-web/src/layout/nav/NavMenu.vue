<template>
  <template v-for="item in menuList" :key="item.path">
    <el-menu-item v-if="item.children.length == 0" :index="item.path">{{ item.title }}</el-menu-item>
    <el-sub-menu v-else :index="item.path">
      <template v-slot:title>{{ item.title }}</template>
      <NavMenu :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import type { routeConfig } from './nav'
import { defineProps } from 'vue'
const props = defineProps<{
  menuList: routeConfig[]
}>()
// console.log(props)
</script>
