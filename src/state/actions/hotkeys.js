import * as types from '../types'

import { deleteTodo, toggleDoneStatus } from './todos'

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

export function toggleDoneStatusSelection() {
  return (dispatch, getState) => {
    const { currentSelection } = getState().hotkeys
    const { todos } = getState()
    const toToggle = todos[currentSelection]
    return dispatch(toggleDoneStatus(toToggle.id))
  }
}

export function focusNewTaskInput() {
  return dispatch => {
    document.getElementById('new-todo').focus()
    return dispatch({ type: types.HOTKEYS_REMOVE_SELECTION })
  }
}

export function removeSelection() {
  return dispatch => dispatch({ type: types.HOTKEYS_REMOVE_SELECTION })
}
