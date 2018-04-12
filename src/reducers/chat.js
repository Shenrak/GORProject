const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
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
export default todos
