import { connect } from "react-redux"
import Rooms from "../views/viw_rooms"

import { getRooms } from "../../core/actions"
import { data } from "../../utils/tree"

const mapStateToProps = state => ({
  data: data(state.rooms),
  token: state.context.token,
})
const mapDispatchToProps = {
  getRooms
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms)
