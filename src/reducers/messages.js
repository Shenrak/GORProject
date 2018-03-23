const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          owner: action.owner
        }
      ]
    // case 'REMOVE_MESSAGE':
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //   )
    default:
      return state
  }
}
 
export default todos
