<template>
  <header>
    <span class="title">Vue TODO</span>
    <router-link class="btn-header" to="/">My Boards</router-link>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    user: Object
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/utils/variables';

  header {
    box-sizing: border-box;
    background-color: $header-background-color;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
    padding: 1rem;

    .title {
      align-self: center;
      color: $header-title-color;
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 1rem;
    }
  }

  .btn-header {
    background-color: $button-header-background-color;
    border: none;
    border-radius: 3px;
    box-shadow: $box-shadow;
    color: $button-header-text-color;
    cursor: pointer;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0 0.5rem
  }
</style>
