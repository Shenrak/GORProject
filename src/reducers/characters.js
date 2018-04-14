const todos = (
  state = [
    {
      id: 0,
      name: "Jahan",
      level: 1,
      hitPoints: 45,
      stuff: [
        {
          name: "Leather helmet",
          armor: "12",
        },
        {
          name: "Pants",
          armor: "0"
        }
      ]
    }
  ],
  action
) => {
  switch (action.type) {
    case "ADD_STUFF":
      const newState = state.map(character => {
        if (character.id === action.id) {
          Object.assign(
            character.stuff,
            {},
            { [action.stuff.name]: action.stuff.value }
          )
        }
      })
    default:
      return state
  }
}
export default todos
