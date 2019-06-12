import { connect } from 'react-redux'
import TodoListContainer from './todo-list-container'

const mapStateToProps = state => ({ todos: state.todos })

export default connect(mapStateToProps)(TodoListContainer)
