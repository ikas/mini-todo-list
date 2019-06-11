import React from 'react'

import NewTodoView from './new-todo-view'

export default class NewTodoContainer extends React.Component {
  render () {
    return <NewTodoView {...this.props} />
  }
}
