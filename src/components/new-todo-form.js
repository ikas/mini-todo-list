import React from 'react'
import PropTypes from 'prop-types'

import Button from './button'

export default class NewTodoForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			todo: '',
		}
  }
  
  submitForm(ev) {
	  console.log('submitting')
    this.props.createTodo(this.state.todo)
  }

	render () {
		const { todo } = this.state	
		return (
			<>
				<input value={todo} onChange={ev => this.setState({ todo: ev.target.value })} />
				<Button onClick={() => this.submitForm()}>Add todo</Button>
			</>
		)
	}
}

NewTodoForm.propTypes = {
  createTodo: PropTypes.func.isRequired,
}
