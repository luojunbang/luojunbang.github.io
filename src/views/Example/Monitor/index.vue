<template>
  <div class="outer" @click="handleError">
    <div class="inner" @click="handleError">inner</div>
    <img src="dfsa91" alt="" />
  </div>
</template>

<script lang="ts" setup>
function handleError(e) {
  console.log(e, JSON.stringify(e.currTarget))
}
</script>
