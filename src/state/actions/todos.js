import * as types from '../types'

export function createTodo(todo) {
  return dispatch => dispatch({
    type: types.TODOS_CREATE,
    todo,
  })
}

export function markTodoAsDone(id) {
  return dispatch => dispatch({ type: types.TODOS_MARK_AS_DONE, id })
}
