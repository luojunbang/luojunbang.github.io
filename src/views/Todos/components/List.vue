<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from 'vue'

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { userId } = toRefs(props)
    console.log(userId)
    // onMounted()
  },
})
</script>
