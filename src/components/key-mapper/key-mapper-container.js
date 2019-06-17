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
        }}
        handlers={{
          moveSelectionUp: this.props.moveSelectionUp,
          moveSelectionDown: this.props.moveSelectionDown,
          deleteSelection: this.props.deleteSelection,
        }}
        focused={true}
        attach={window}
      >
        {this.props.children}
      </HotKeys>
    )
  }
}
