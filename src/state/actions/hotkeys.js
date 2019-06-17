import * as types from '../types'

import { deleteTodo } from './todos'

export function moveSelectionUp() {
  return (dispatch, getState) => dispatch({ 
    type: types.HOTKEYS_MOVE_SELECTION_UP, 
    current: getState().hotkeys.currentSelection,
  })
}

export function moveSelectionDown() {
  return (dispatch, getState) => dispatch({ 
    type: types.HOTKEYS_MOVE_SELECTION_DOWN, 
    current: getState().hotkeys.currentSelection,
  })
}

export function deleteSelection() {
  return (dispatch, getState) => {
    const { currentSelection } = getState().hotkeys
    const { todos } = getState()
    const toDelete = todos[currentSelection]
    return dispatch(deleteTodo(toDelete.id))
  }
}
