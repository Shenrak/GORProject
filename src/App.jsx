import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './scss/main.scss'
import Chatbox from './components/Chatbox'

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Chatbox/>
        </MuiThemeProvider>
    )
  }
}

export default App
