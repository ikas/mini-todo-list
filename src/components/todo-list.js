import React from 'react'
import PropTypes from 'prop-types'

export default class TodoList extends React.Component {
	render () {
		const { todos } = this.props
		return (
			<ul>
				{ todos.map(todo => (
					<li key={todo.id}>{todo.todo} {todo.done}</li>
				)) }
			</ul>
		)
	}	
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}
