import { connect } from "react-redux"
import Rooms from "../views/viw_rooms"

import { getRoomsTree } from "../../core/actions"

const mapStateToProps = state => ({
  data: state.rooms.roomsTree,
  token: state.context.token,
  currentRoom: state.rooms.currentRoom,
})
const mapDispatchToProps = {
  getRoomsTree
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms)
