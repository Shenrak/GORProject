import React from "react"
import Paper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

import Message from "../containers/message-container"

const Chatbox = ({ onClick, messages = [] }) => (
  <div>
    {
      //<Paper className = "chatboxContainer" zDepth={5} />
    }
    <Paper className="chatbox-container" zDepth={5}>
      <Paper className="chatbox" zDepth={2} />
      {messages.map(message => <Message key={message.id} {...message} />)}
      <TextField
        className="chatbox-textfield"
        hintText="Tell the Game Master !"
        floatingLabelText="What will you do next ?"
      />
      <RaisedButton className="chatbox-button" label="Send" secondary={true} />
    </Paper>
  </div>
)

export default Chatbox
