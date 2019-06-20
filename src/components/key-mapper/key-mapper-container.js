import React from 'react'
import { HotKeys } from 'react-hotkeys'

export default class KeyMapperContainer extends React.Component {
  render() {
    return (
      <HotKeys 
        keyMap={{
          moveSelectionUp: 'up',
          moveSelectionDown: 'down',
          deleteSelection: 'command+backspace',
          toggleDoneStatusSelection: 'enter',
          focusNewTaskInput: 'command+down',
        }}
        handlers={{
          moveSelectionUp: this.props.moveSelectionUp,
          moveSelectionDown: this.props.moveSelectionDown,
          deleteSelection: this.props.deleteSelection,
          toggleDoneStatusSelection: this.props.toggleDoneStatusSelection,
          focusNewTaskInput: this.props.focusNewTaskInput,
        }}
        focused={true}
        attach={window}
        style={{ outline: 'none' }}
        id="key-mapper"
      >
        {this.props.children}
      </HotKeys>
    )
  }
}
