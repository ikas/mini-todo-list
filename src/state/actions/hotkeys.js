import * as types from '../types'

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
