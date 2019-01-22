import React from "react"
import { Segment, Divider } from "semantic-ui-react"

const Message = ({ text, owner, colored }) => (
  <Segment
    raised
    className="message"
    style={{
      padding: "0.5em",
      backgroundColor: colored ? "rgb(0, 181, 111)" : "white",
      color: colored ? "white" : "black"
    }}
  >
    <strong> {owner} </strong>
    <Divider fitted inverted />
    <p>{text}</p>
  </Segment>
)

export default Message
