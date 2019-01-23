import { connect } from "react-redux"
import Rooms from "../views/viw_rooms"

import { getRoomsTree } from "../../core/actions"

const mapStateToProps = state => ({
  data: state.rooms,
  token: state.context.token,
})
const mapDispatchToProps = {
  getRoomsTree
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms)
