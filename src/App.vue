<template>
  <div id="app">
    <app-header :user="user"></app-header>
    <router-view class="container"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'app',
  components: { AppHeader, AppFooter },

  data () {
    return {
      boardName: ''
    }
  },

  computed: {
    ...mapState(['user', 'boards'])
  },

  methods: {
    ...mapActions(['addBoard']),
    add () {
      this.addBoard({ name: this.boardName })
      this.boardName = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/utils/variables';

  #app {
    box-sizing: border-box;
    color: $app-text-color;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }

  .container {
    padding-bottom: 4rem;
  }
</style>
