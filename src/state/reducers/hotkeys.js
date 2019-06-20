import * as types from '../types'

const initialState = {
  todosCount: 0,
  currentSelection: undefined,
}

export default function (state = initialState, action) {
  const { current } = action
  const { todosCount } = state

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
        currentSelection: current !== undefined ? Math.max(current - 1, 0) : todosCount - 1,
      })
    }

    case types.HOTKEYS_MOVE_SELECTION_DOWN: {
      return Object.assign({}, state, {
        currentSelection: current !== undefined ? Math.min(current + 1, todosCount - 1) : 0,
      })
    }
    
    case types.HOTKEYS_REMOVE_SELECTION: {
      return Object.assign({}, state, {
        currentSelection: undefined,
      })
    }
    
    default:
      return state
  }
}
