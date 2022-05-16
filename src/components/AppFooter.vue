<template>
  <footer>
    <span>VUE-TODO APP by <a href="https://github.com/miikorz" target="_blank">Miguel Burdeos</a></span>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss" scoped>
  @import 'src/utils/variables';
  
  footer {
    box-sizing: border-box;
    background-color: $footer-background-color;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;

    a {
      text-decoration: none;
      color: $footer-link-color;
    }
  }
</style>
