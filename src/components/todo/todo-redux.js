import { connect } from 'react-redux'

import { toggleDoneStatus, deleteTodo } from '../../state/actions/todos'
import TodoContainer from './todo-container'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  toggleDoneStatus: id => dispatch(toggleDoneStatus(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer)

