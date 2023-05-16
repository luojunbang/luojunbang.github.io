<template>
  <router-link class="link" v-bind="$attrs" :to="to"><slot></slot></router-link>
</template>

<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.link {
  display: inline-block;
  width: 100%;
  overflow: hidden;
}
</style>
