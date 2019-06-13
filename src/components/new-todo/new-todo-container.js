import React from 'react'

import NewTodoView from './new-todo-view'

export default class NewTodoContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: ''
    }
  }

  submitForm(ev) {
    ev.preventDefault()
    this.props.createTodo(this.state.todo)
    this.setState({ todo: '' })
  }

  render () {
    return <NewTodoView 
      todo={this.state.todo}
      onChange={ev => this.setState({ todo: ev.target.value })}
      submit={ev => this.submitForm(ev)}
      {...this.props}
    />
  }
}
