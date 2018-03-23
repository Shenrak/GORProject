import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './styles/main.scss'
import Chatbox from './ui/components/Chatbox'

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
