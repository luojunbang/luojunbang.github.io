<template>
  <div :style="{ height: height }"></div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    height: {
      type: String,
      default: '200px'
    }
  }
}
</script>

<style lang="scss" scoped></style>
