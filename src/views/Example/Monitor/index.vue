<template>
  <div class="outer" @click="handleError">
    <div class="inner" @click="handleError">inner</div>
  </div>
</template>

<script lang="ts" setup>
import { fmtDate, fmtTime } from 'lo-utils'

function handleError(e) {
  console.log(e, JSON.stringify(e.currTarget))
}
</script>
