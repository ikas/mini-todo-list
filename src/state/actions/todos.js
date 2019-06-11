import * as types from '../types'

export function createTodo(todo) {
  return dispatch => dispatch({
    type: types.TODOS_CREATE,
    todo,
  })
}
