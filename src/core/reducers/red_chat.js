import { combineReducers } from "redux"
import { ActionTypes } from "../actions/act_types"

const messages = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          owner: action.owner
        }
      ]
    default:
      return state
  }
}
export default combineReducers({ messages })
