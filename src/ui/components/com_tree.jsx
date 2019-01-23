import React from "react"
import { List } from "semantic-ui-react"
import Rooms from "../views/viw_rooms"

const renderTree = (data, onToggle) => {
  return data.map(room => (
    <List.Item>
      <List.Icon name={room.children ? "chevron right" : ""} />
      <List.Content>
        <section
          onClick={onToggle}
          style={{
            cursor: "pointer",
            userSelect: "none"
          }}
        >
          <List.Header>{room.name}</List.Header>
          <List.Description>
            Public : {room.public ? "yes" : "no"}
          </List.Description>
        </section>
        {room.children && room.public ? (
          <List.List>{renderTree(room.children)}</List.List>
        ) : (
          ""
        )}
      </List.Content>
    </List.Item>
  ))
}

const Tree = ({ data, onToggle }) => <List>{renderTree(data, onToggle)}</List>

export default Tree
