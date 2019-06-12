import { connect } from 'react-redux'

import { toggleDoneStatus } from '../../state/actions/todos'
import TodoContainer from './todo-container'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  toggleDoneStatus: id => dispatch(toggleDoneStatus(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoContainer)

