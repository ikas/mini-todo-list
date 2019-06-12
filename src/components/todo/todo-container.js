import React from 'react'

import TodoView from './todo-view'

export default class TodoContainer extends React.Component {
  render () {
    return <TodoView {...this.props} />
  }
}
