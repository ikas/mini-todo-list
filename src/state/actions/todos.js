import * as types from '../types'

export function createTodo(todo) {
  return dispatch => dispatch({
    type: types.TODOS_CREATE,
    todo,
  })
}

export function toggleDoneStatus(id) {
  return dispatch => dispatch({ type: types.TODOS_TOGGLE_DONE, id })
}

export function deleteTodo(id) {
  return dispatch => dispatch({ type: types.TODOS_DELETE, id })
}
