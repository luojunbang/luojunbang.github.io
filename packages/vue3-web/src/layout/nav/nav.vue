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
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import NavMenu from './NavMenu.vue'
import { generateMenuFromFilePath } from '@/router/routerImport'
const activeIndex: Ref = ref('dashboard')

const router = useRouter()

function handleSelect(e: string) {
  activeIndex.value = e
  router.push('/' + e)
}

const routerNest = [
  { path: 'Dashboard', href: 'dashboard', fullPath: 'Dashboard/dashboard.vue' },
  { path: 'CssDisplay', href: 'cssDisplay', fullPath: 'CssDisplay/index.vue' },
  { path: 'Components', href: 'carousel', fullPath: 'Carousel/index.vue' },
  {
    path: 'Example',
    href: 'example',
    fullPath: 'Example/index.vue',
    children: generateMenuFromFilePath((process.env.EXAMPLE_LIST ?? []) as string[], 'example/', route => {
      if (route.path === 'FormTable') route.meta = { title: '可视化表格表单' }
    }),
  },
]
</script>

<style lang="scss" scoped></style>
