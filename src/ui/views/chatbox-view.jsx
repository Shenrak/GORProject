import React from "react"
import { Input, Button, Segment } from "semantic-ui-react"
import { Socket } from "phoenix"

import Message from "../components/message-view"

class Chatbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
      socketOpened: false
    }
    this.connect.bind(this)
    this.connect()
  }

  connect() {
    const socket = new Socket("ws://localhost:4000/socket", {
      params: { token: this.props.token, login: this.props.login }
    })
    socket.onOpen(() => this.setState({ socketOpened: true }))
    socket.connect()
    this.channel = socket.channel("room:lobby", {})
  }

  componentDidMount() {
    this.channel.join().receive("ok", response => {
      console.log("joined successfully ! " + response)
    })

    this.channel.on("new_msg", payload => {
      this.props.addMessage(payload.message, payload.userName)
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.messages !== nextProps.messages ||
      this.props.connected !== nextProps.connected ||
      this.state !== nextState
    )
  }

  handleSubmit = event => {
    event.preventDefault()
    this.channel.push("new_msg", {
      message: this.state.message,
      userName: this.props.login
    })
    this.setState({
      message: ""
    })
  }

  handleInputMessage(event) {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Segment className="chatbox-container" raised>
          <Segment
            className="message"
            color="red"
            inverted
            style={{ display: this.state.socketOpened ? "none" : "block" }}
            onClick={this.connect.bind(this)}
          >
            Connection failed -- Click here to reconnect
          </Segment>
          <Input
            className="chatbox-textfield"
            placeholder="What will you do next ?"
            value={this.state.message}
            onChange={this.handleInputMessage.bind(this)}
            disabled={!this.state.socketOpened}
          />
          {this.props.messages.map(message => (
            <Message
              key={message.id}
              {...message}
              colored={this.props.login !== message.owner}
            />
          ))}
          <Button className="chatbox-button" label="Send" secondary={true} />
        </Segment>
      </form>
    )
  }
}

export default Chatbox
