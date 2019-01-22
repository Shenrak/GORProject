import { connect } from "react-redux"
import Login from "../views/viw_login"

import { login, register } from "../../core/actions"

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
