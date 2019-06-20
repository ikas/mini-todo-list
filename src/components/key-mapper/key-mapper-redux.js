import { connect } from 'react-redux'

import { 
  moveSelectionUp, 
  moveSelectionDown, 
  deleteSelection, 
  toggleDoneStatusSelection,
  focusNewTaskInput,
  removeSelection,
} from '../../state/actions/hotkeys'
import KeyMapperContainer from './key-mapper-container'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  moveSelectionUp: () => dispatch(moveSelectionUp()),
  moveSelectionDown: () => dispatch(moveSelectionDown()),
  deleteSelection: () => dispatch(deleteSelection()),
  toggleDoneStatusSelection: () => dispatch(toggleDoneStatusSelection()),
  focusNewTaskInput: () => dispatch(focusNewTaskInput()),
  removeSelection: () => dispatch(removeSelection()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KeyMapperContainer)
