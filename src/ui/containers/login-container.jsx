import { connect } from "react-redux"
import Login from "../views/login-view"

import { login, register } from "../../actions"

const mapStateToProps = state => ({
  connected: state.context.connected,
  token: state.context.token
})
const mapDispatchToProps = {
  login,
  register
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
