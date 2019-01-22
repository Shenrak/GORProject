import { connect } from "react-redux"
import Chatbox from "../views/viw_chatbox"

import {addMessage} from "../../core/actions"

const mapStateToProps = state => ({
  connected: state.context.connected,
  messages: state.chat.messages,
  token: state.context.token,
  login: state.context.login
})
const mapDispatchToProps = {
  addMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatbox)
