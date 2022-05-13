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
  .board-card {
    background-color: #546E7A;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
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
      background-color: #90a4ae;
      font-weight: bold;
    }

    &-button {
      display: flex;
      align-items: center;
      border: 1px solid #ff5353;
      padding: 0 14px 1px 14px;
      border-radius: 1px;
      cursor: pointer;
      font-size: 16px;
      color: #ff5353;
      width: 45px;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0px;

      &:active {
        border: 1px solid #760406;
        color: #760406;
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
