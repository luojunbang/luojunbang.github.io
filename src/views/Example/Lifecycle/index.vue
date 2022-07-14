<template>
  <div></div>
  <cmp :name="name" @change="change" />
</template>

<script lang="ts" setup>
import cmp from './component.vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref, Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const lifeList = ['onBeforeMount', 'onMounted', 'onBeforeUpdate', 'onUpdated', 'onBeforeUnmount', 'onUnmounted']
;[onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted].forEach((item, idx) => {
  item(() => {
    ;[console.log('parent:', lifeList[idx])]
  })
}, {})
const change = () => {
  console.log('onChange----')
  name.value = 'change ParentName'
}
const name: Ref<string> = ref('myName')
setTimeout(() => {
  name.value = 'ParentName'
}, 3000)
</script>
