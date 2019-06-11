import uuid from 'uuid/v4'

import * as types from '../types'

const initialState = {
  byId: {},
  list: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.TODOS_CREATE:
      const id = uuid()
      const newTodo = { id, todo: action.todo, done: false }
      state.byId[id] = newTodo
      return Object.assign({}, state, { 
        byId: state.byId,
        list: state.list.concat([newTodo]),
      })

    default:
      return state
  }
}
