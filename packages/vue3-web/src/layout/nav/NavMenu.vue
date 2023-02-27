<template>
  <template v-for="item in menuList" :key="cpHref(item.path)">
    <el-menu-item v-if="!item.children" :index="cpHref(item.path)">
      <a-link :to="cpHref(item.path)">{{ item.meta?.title ?? item.name }}</a-link>
    </el-menu-item>
    <el-sub-menu v-else :index="cpHref(item.path)">
      <template v-slot:title>{{ item.meta?.title ?? item.name }}</template>
      <NavMenu :menuList="item.children" :baseUrl="cpHref(item.path)" />
    </el-sub-menu>
  </template>
</template>

<script lang="ts" setup>
import ALink from './link.vue'
import type { AIRouteRecordBase } from '@/router/routerImport'
import type { PropType } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  menuList: {
    type: Array as PropType<AIRouteRecordBase[]>,
    reuqired: true,
  },
  baseUrl: {
    type: String,
    default: '',
  },
})

const cpHref = computed(() => {
  return (path: string) => `${props.baseUrl}/${path}`
})
</script>
