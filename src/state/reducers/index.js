import { combineReducers } from 'redux'

import hotkeys from './hotkeys'
import todos from './todos'

export default combineReducers({
  hotkeys,
  todos,
})
