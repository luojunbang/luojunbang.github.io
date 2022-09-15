<template>
  <div class="mx-auto mt-xl w-[480px] flex flex-wrap items-end text-center">
    <a
      v-for="(item, index) in linkList"
      :class="{ 'item-version': item.versions && item.versions.length > 0 }"
      class="item"
      :style="{ backgroundImage: `url(${item.icon})` }"
      :href="item.href"
      :key="item.href"
    >
      <h3 class="w-full xl-yb">{{ item.label }}</h3>
      <div class="version-items flex flex-col">
        <a v-for="v in item.versions" :href="v.href" :key="v.href" class="flex-1 flex items-center justify-center hover:bg-white hover:text-black">{{ v.label }}</a>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, unref } from 'vue'
import { storage, FRIENDILY_LINK } from '@/common'
import { useList } from '../composables/useList'
import type { LinkItem } from './friendlyLink'
import defaultList from '../common/config'

if (!storage.get(FRIENDILY_LINK)) storage.set(FRIENDILY_LINK, defaultList)
const local_list = storage.get(FRIENDILY_LINK) ?? defaultList
const { value: linkList, add, remove } = useList<LinkItem>(local_list)

const handleHrefClick = (item: { href: string }) => {
  window.location.href = item.href
}

onMounted(() => {})
</script>

<style lang="scss" scoped>
.item {
  @apply cursor-pointer	bg-no-repeat bg-center relative w-[120px] h-[120px]  overflow-hidden;
  background-size: 60%;
  &-version {
    .version-items {
      @apply w-full h-full absolute top-[100%];
      background-color: rgba(0, 0, 0, 0.6);
      transition: all 0.3s;
      top: 100%;
    }
    &:hover {
      h3 {
        bottom: 100%;
      }
      .version-items {
        top: 0;
      }
    }
  }
  h3 {
    transition: all 0.3s;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0) 100%);
  }
}
</style>
