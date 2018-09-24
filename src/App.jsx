import React, { Component } from "react"
import { connect } from "react-redux"

import "./styles/main.css"
import "semantic-ui-css/semantic.min.css"
import "react-redux-toastr/lib/css/react-redux-toastr.min.css"
import Chatbox from "./ui/containers/chatbox-container"
import Character from "./ui/containers/character-container"
import Login from "./ui/containers/login-container"
import Overlay from "./ui/components/overlay"

class App extends Component {
  render() {
    return (
      <div>
        <Overlay />
        {!this.props.connected ? <Login /> : ""}
        <h1>GOR Project</h1>
        <div className="game">
          {this.props.connected ? <Chatbox /> : ""}
          {/* <Character />  */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  connected: state.context.connected,
  token: state.context.token
})
const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
