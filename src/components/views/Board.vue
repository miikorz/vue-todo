<template>
  <section>
    <h3><span>My Boards</span> ▸ {{ name }}</h3>
    <input
      type="text"
      placeholder="Add a new TODO list..."
      v-model="listName"
      @keyup.enter="add()"
    />
    <template v-if="fetchingData">
      <loading></loading>
    </template>
    <div class="container">
      <column
        v-for="(list, index) in boardLists"
        :key="index"
        :listId="list.id"
        :name="list.name">
      </column>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Column from '@/components/Column'
import Loading from '@/components/LoadingSpinner'

export default {
  name: 'board',
  components: { Column, Loading },

  props: {
    name: String,
    id: String
  },

  data () {
    return {
      listName: ''
    }
  },

  computed: {
    ...mapState([
      'fetchingData',
      'error'
    ]),
    ...mapGetters([
      'getListsByBoard'
    ]),
    boardLists () {
      return this.getListsByBoard(this.id)
    }
  },

  methods: {
    ...mapActions([
      'addColumn',
      'fetchLists'
    ]),
    add () {
      this.addColumn({ board: this.id, name: this.listName })
      this.listName = ''
    }
  },

  created () {
    this.fetchLists({ board: this.id })
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/utils/variables';

  h3 {
    color: $app-text-color;
    text-align: left;
    margin: 1.5rem;

    span {
      color: $board-card-color;
    }
  }

  section {
    text-align: left;
  }

  .container {
    box-sizing: border-box;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  input {
    background-color: $input-color;
    border: 0;
    border-radius: 3px;
    box-shadow: $box-shadow;
    color: $input-color;
    font-size: 1.2rem;
    margin: 0 1rem;
    outline: 0;
    padding: 1rem;
    transition: all 600ms ease;
    margin-top: 1rem;
    &:active,
    &:focus {
      background-color: #fafafa;
    }

    &::placeholder {
      color: $input-placeholder-color;
    }

    @media screen and (min-width: 600px) {
      width: 33%;
    }

    @media screen and (min-width: 1024px) {
      width: 250px;
    }
  }
</style>
