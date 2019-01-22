import React, { Component } from "react"
import { connect } from "react-redux"

import "./styles/main.css"
import "semantic-ui-css/semantic.min.css"
import "react-redux-toastr/lib/css/react-redux-toastr.min.css"
import Chatbox from "./ui/containers/con_chatbox"
import Character from "./ui/containers/con_character"
import Login from "./ui/containers/con_login"
import Rooms from "./ui/containers/con_rooms"
import Overlay from "./ui/components/com_overlay"

class App extends Component {
  render() {
    return (
      <div>
        <Overlay />
        {!this.props.connected ? <Login /> : ""}
        <h1>GOR Project</h1>
        <div className="game">
          {this.props.connected ? <Rooms /> : ""}
          {this.props.connected ? <Chatbox /> : ""}
          {this.props.connected ? <Character /> : ""}
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
