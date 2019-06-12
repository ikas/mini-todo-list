import uuid from 'uuid/v4'

import * as types from '../types'

export default function (state = [], action) {
  switch (action.type) {
    case types.TODOS_CREATE:
      const newTodo = { id: uuid(), todo: action.todo, done: false }
      return state.concat([newTodo])

    case types.TODOS_TOGGLE_DONE:
      const index = state.indexOf(state.find(t => t.id === action.id))
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], { done: !state[index].done }),
        ...state.slice(index + 1),
      ]
    default:
      return state
  }
}
