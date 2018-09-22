import React from "react"
import { Segment, Divider} from "semantic-ui-react"

const Message = ({ text, owner }) => (
  <Segment raised className="message">
    <strong> {owner} </strong>
    <Divider fitted inverted />
    <p>{text}</p>
  </Segment>
)

export default Message
