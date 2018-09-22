import React, { Component } from "react"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import "./styles/main.css"
import "semantic-ui-css/semantic.min.css"
import Chatbox from "./ui/containers/chatbox-container"
import Character from "./ui/containers/character-container"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <h1>GOR Project</h1>
        <div className="game">
          <Chatbox />
          {/* <Character /> */}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
