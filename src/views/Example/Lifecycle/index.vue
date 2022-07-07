<template>
  <div></div>
  <cmp :name="name" @change="change" />
</template>

<script lang="ts" setup>
import cmp from './component.vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref, Ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
;[onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted].forEach((item, idx) => {
  item(() => {
    ;[console.log('parent:', idx)]
  })
}, {})
const change = () => {
  console.log('onChange')
  name.value = 'change namw'
}
const name: Ref<string> = ref('myName')
setTimeout(() => {
  name.value = 'YourName'
}, 3000)
</script>
