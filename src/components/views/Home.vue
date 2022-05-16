<template>
  <div>
    <h3>My Boards</h3>
    <div class="boards-collection">
      <template v-if="fetchingData">
        <span>Loading...</span>
      </template>
      <input
        type="text"
        placeholder= "Add new board"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id">
      </board-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BoardCard from '@/components/BoardCard'

export default {
  name: 'home-view',
  components: { BoardCard },

  data () {
    return {
      boardName: ''
    }
  },

  computed: {
    ...mapState([
      'boards',
      'fetchingData',
      'error'
    ])
  },

  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    add () {
      this.addBoard({ name: this.boardName })
      this.boardName = ''
    }
  },

  created () {
    this.fetchBoards({ user: 1 })
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/utils/variables';
  
  h3 {
    text-align: left;
    margin: 1.5rem;
  }

  .boards-collection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: $board-card-color;
    border: 2px solid $board-card-color;
    border-radius: 5px;
    font-size: 1.1rem;
    outline: 0;
    margin: 0.5rem 1.5rem;
    padding: 1rem;
    transition: all 600ms ease;
    max-height: 100px;
    padding-bottom: 60px;
    width: 100%;

    &:focus,
    &:active {
      background-color: white;
      color: $board-card-color;
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
