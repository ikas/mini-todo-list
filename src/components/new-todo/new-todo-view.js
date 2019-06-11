import React from 'react'

import Button from '../button'

export default class NewTodoView extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			todo: '',
		}
  }
  
	render () {
		const { todo } = this.state	
		return (
			<>
				<input value={todo} onChange={ev => this.setState({ todo: ev.target.value })} />
				<Button onClick={() => this.props.createTodo(todo)}>
          Add todo
        </Button>
			</>
		)
	}
}
