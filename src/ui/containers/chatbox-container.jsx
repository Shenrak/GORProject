import { connect } from "react-redux"
import Chatbox from "../views/chatbox-view"

import {addMessage} from "../../actions"

const mapStateToProps = state => ({
  messages: state.chat.messages,
})
const mapDispatchToProps = {
  addMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatbox)
