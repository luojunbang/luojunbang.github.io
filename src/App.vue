<template>
  <div id="app">
    <dashboard />
  </div>
</template>

<script>
import dashboard from "@/view/dashboard.vue";
export default {
  name: "App",
  components: {
    dashboard,
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
