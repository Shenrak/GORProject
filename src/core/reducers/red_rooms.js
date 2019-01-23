import { ActionTypes } from "../actions/act_types"
import { combineReducers } from "redux"

const rooms = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ROOMS:
      return action.rooms || state
    default:
      return state
  }
}

const roomsTree = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ROOMS:
      return action.tree || state
    default:
      return state
  }
}

const currentRoom = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CURRENT_ROOMS:
      return action.currentRoom
    default:
      return state
  }
}

export default combineReducers({rooms, roomsTree, currentRoom})
