<template>
  <router-link
    class="board-card"
    :to="{ name: 'board', params: { name, id } }">
      <span class="board-card-title">{{ name }}</span>
      <div class="board-card-button" @click.prevent="deleteBoard({ boardId: id })">Remove</div>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'board-card',
  props: {
    id: String,
    name: String
  },
  methods: {
    ...mapActions([
      'deleteBoard'
    ])
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/utils/variables';

  .board-card {
    background-color: $board-card-color;
    box-shadow: $box-shadow;
    box-sizing: border-box;
    border-radius: 5px;
    color: #fafafa;
    margin: 0.5rem 1.5rem;
    padding: 1rem;
    text-align: left;
    text-decoration: none;
    transition: all 600ms ease;
    width: 100%;
    height: 100px;
    position: relative;

    &-title {
      font-size: 1.2rem;
    }

    &:hover {
      background-color: $board-card-hover-color;
      font-weight: bold;
    }

    &-button {
      display: flex;
      align-items: center;
      border: 1px solid $button-remove-primary-color;
      padding: 0 14px 1px 14px;
      border-radius: 1px;
      cursor: pointer;
      font-size: 16px;
      color: $button-remove-primary-color;
      width: 45px;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0px;

      &:active {
        border: 1px solid $button-remove-secondary-color;
        color: $button-remove-secondary-color;
      }
    }

    @media screen and (min-width: 600px) {
      width: 33%;
    }
    @media screen and (min-width: 1024px) {
      width: 250px;
    }
  }
</style>
