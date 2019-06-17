import { connect } from 'react-redux'

import { moveSelectionUp, moveSelectionDown, deleteSelection } from '../../state/actions/hotkeys'
import KeyMapperContainer from './key-mapper-container'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  moveSelectionUp: () => dispatch(moveSelectionUp()),
  moveSelectionDown: () => dispatch(moveSelectionDown()),
  deleteSelection: () => dispatch(deleteSelection()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(KeyMapperContainer)
