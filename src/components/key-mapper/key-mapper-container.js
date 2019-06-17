import React from 'react'
import { HotKeys } from 'react-hotkeys'

export default class KeyMapperContainer extends React.Component {
  render() {
    return (
      <HotKeys 
        keyMap={{
          selectUp: 'up',
          selectDown: 'down',
        }}
        handlers={{
          selectUp: this.props.moveSelectionUp,
          selectDown: this.props.moveSelectionDown,
        }}
      >
        {this.props.children}
      </HotKeys>
    )
  }
}
