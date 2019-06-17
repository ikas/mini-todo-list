import { connect } from 'react-redux'
import TodoListContainer from './todo-list-container'

const mapStateToProps = state => ({ 
  currentSelection: state.hotkeys.currentSelection,
  todos: state.todos,
})

export default connect(mapStateToProps)(TodoListContainer)
