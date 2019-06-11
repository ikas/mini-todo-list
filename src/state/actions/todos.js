import * as types from '../types'

export function createTodo() {
  return dispatch => dispatch({
    type: types.TODOS_CREATE,
  })
}
