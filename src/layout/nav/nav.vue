<template>
  <div class="nav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <NavMenu :menuList="routerNest" />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { navRoutePath, config } from '@/router'
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

const routerNest = [
  {
    path: '/css',
    title: 'CSS',
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
