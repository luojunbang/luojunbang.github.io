<template>
  <input type="text" v-model="inputText" @input="input" />
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    input() {
      this.$emit("input", this.inputText);
    },
  },
};
</script>

<style></style>
