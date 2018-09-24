import * as actionTypes from "../actions/types"

const todos = (
  state = [],
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_CHARACTERS:
      return action.characters
    default:
      return state
  }
}
export default todos
