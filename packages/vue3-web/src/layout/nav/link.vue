<template>
  <router-link v-bind="$attrs" :to="to"><slot></slot></router-link>
</template>

<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
