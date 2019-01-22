import * as actionTypes from "../actions/act_types"

const rooms = (
  state = [],
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_ROOMS:
      return action.rooms || state
    default:
      return state
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROOMS:
      return action.rooms.result
    default:
      return state
  }
}

export default rooms