import * as types from './mutation-types'
import API from '@/api'

export default {
  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST)

    API.getBoardsByUser(user)
      .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },

  fetchLists ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST)

    API.getListsFromBoard(board)
      .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  fetchTasks ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST)

    API.getTasksFromList(list)
      .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },

  addBoard ({ commit }, { name }) {
    API.postBoard(name)
      .then(board => commit(types.ADD_BOARD, { board }))
  },

  addColumn ({ commit }, { board, name }) {
    API.postList(board, name)
      .then((column) => commit(types.ADD_COLUMN, { column }))
  },

  addTask ({ commit }, { list, title }) {
    API.postTask(list, title)
      .then((task) => commit(types.ADD_TASK, { task }))
  },

  deleteTask ({ commit }, { taskId }) {
    API.deleteTask(taskId)
      .then(() => commit(types.DELETE_TASK, { taskId }))
  },

  deleteBoard ({ commit }, { boardId }) {
    API.deleteBoard(boardId)
      .then(() => commit(types.DELETE_BOARD, { boardId }))
  },

  deleteList ({ commit }, { listId }) {
    API.deleteList(listId)
      .then(() => commit(types.DELETE_LIST, { listId }))
  },

  markAsCompleted ({ commit }, { task }) {
    API.completedTask(task.id)
      .then(() => commit(types.MARK_AS_COMPLETED, { task }))
  }
}
