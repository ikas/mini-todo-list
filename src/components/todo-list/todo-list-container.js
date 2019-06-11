import React from 'react'

import TodoListView from './todo-list-view'

export default class TodoListContainer extends React.Component {
  render () {
    return <TodoListView {...this.props} />
  }
}
