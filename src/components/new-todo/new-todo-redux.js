import { connect } from 'react-redux'

import { createTodo } from '../../state/actions/todos'
import NewTodoContainer from './new-todo-container'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewTodoContainer)

