import { connect } from 'react-redux'

import { markTodoAsDone } from '../../state/actions/todos'
import TodoContainer from './todo-container'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  markTodoAsDone: id => dispatch(markTodoAsDone(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer)

