<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
      @click="markAsCompleted({ task })"
      @dblclick="deleteTask({ taskId: task.id })">
        {{ task.title }}
    </li>
    <input
      type="text"
      placeholder="Add a new task..."
      v-model="title"
      @keyup.enter="add()"
    />
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'task-list',
  props: {
    listId: String,
    tasks: Array
  },

  data () {
    return {
      title: ''
    }
  },

  methods: {
    ...mapActions([
      'addTask',
      'markAsCompleted',
      'deleteTask'
    ]),
    add () {
      this.addTask({ list: this.listId, title: this.title })
      this.title = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/utils/variables';

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    background-color: $task-background-color;
    border-radius: 3px;
    border-bottom: 1px solid $task-border-color;
    margin: 0.25rem 0;
    padding: 1rem;

    &.completed {
      background-color: $task-completed-color;
      color: $task-text-secondary-color;
    }
  }

  input {
    box-sizing: border-box;
    background-color: $task-background-color;
    border: none;
    border-radius: 3px;
    font-size: 1rem;
    outline: 0;
    margin: 0.25rem 0;
    padding: 1rem;
    transition: background-color 600ms ease;
    width: 100%;

    &:focus,
    &:active {
      box-shadow: $box-shadow;
    }

    &::placeholder {
      color: $task-text-secondary-color;
    }
  }
</style>
