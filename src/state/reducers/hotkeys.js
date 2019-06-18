import * as types from '../types'

const initialState = {
  todosCount: 0,
  currentSelection: undefined,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.TODOS_CREATE: {
      return Object.assign({}, state, {
        todosCount: state.todosCount + 1,
      })
    }

    case types.TODOS_DELETE: {
      return Object.assign({}, state, {
        todosCount: state.todosCount - 1,
      })
    }
    
    case types.HOTKEYS_MOVE_SELECTION_UP: {
      return Object.assign({}, state, {
        currentSelection: Math.max(action.current - 1, 0),
      })
    }

    case types.HOTKEYS_MOVE_SELECTION_DOWN: {
      return Object.assign({}, state, {
        currentSelection: Math.min(action.current + 1, state.todosCount - 1),
      })
    }
    
    default:
      return state
  }
}
