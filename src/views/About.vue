<template>
  <div class="about">
    <span class="mg-r text-title">用户ID:{{ userId }}</span>
    <button @click="handleChange">Change user</button>
    <Todos :userId="userId" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Todos from './Todos/index.vue'
export default defineComponent({
  components: { Todos },
  setup() {
    const start = Math.random().toString(16).slice(2, 4)
    const userId = ref<string>(start)
    const handleChange = () => (userId.value = Math.random().toString(16).slice(2, 4))
    return {
      userId,
      handleChange
    }
  }
})
</script>
