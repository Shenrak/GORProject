import { connect } from 'react-redux'
import Message from '../views/message-view'
 
const mapStateToProps = state => ({
  // messages: state.chat.messages
})
 
const mapDispatchToProps = dispatch => ({
  //toggleTodo: id => dispatch(addMessage(id))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)