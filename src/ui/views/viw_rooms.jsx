import React from "react"
import { Input, Message, Segment } from "semantic-ui-react"

import Tree from "../components/com_tree"

class Rooms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
    this.onToggle = this.onToggle.bind(this)
  }

  componentDidMount() {
    this.props.getRooms(this.props.token)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  handleClick = event => {
    event.preventDefault()
    console.log("clicked")
  }

  onToggle(node, toggled) {
    if (this.state.cursor) {
      this.state.cursor.active = false
    }
    node.active = true
    if (node.children) {
      node.toggled = toggled
    }
    this.setState({ cursor: node })
  }

  render() {
    return (
      <Segment className="rooms" raised>
      {/* <Message>
        <Message.Header>
          You are currently in {this.props.currentRoom.name}. This room is {this.props.currentRoom.public ? " public." : " private."}
        </Message.Header>
        <Message.Content>
          Feel free to move to another room !
        </Message.Content>
      </Message> */}
        <Tree data={this.props.data} onToggle={this.handleClick}/>
      </Segment>
    )
  }
}

export default Rooms
