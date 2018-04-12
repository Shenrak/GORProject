import { connect } from 'react-redux'
import Chatbox from '../components/chatbox-view'
 
const mapStateToProps = state => ({
  messages: state.chat.messages
})
 
const mapDispatchToProps = dispatch => ({
  //toggleTodo: id => dispatch(addMessage(id))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatbox)