<template>
  <i class="iconfont" :class="iconName" :style="{ fontSize }"></i>
</template>

<script lang="ts" setup>
import { isNumber, isString } from 'lodash'
import { defineProps, computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: [String, Number],
    default: '20px',
  },
})

const iconName = computed(() => (props.icon.indexOf('iconfont') == -1 ? 'icon-' : '') + props.icon)

const fontSize = computed(() => parseToPx(props.size))

function parseToPx(val: string | number): string {
  if (/^[1-9][0-9]+(.[0-9]+)?$/g.test(val.toString())) return val + 'px'
  else return val.toString()
}
</script>

<style lang="scss">
@import './iconfont.css';
</style>
