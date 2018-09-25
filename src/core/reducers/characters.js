import * as actionTypes from "../actions/types"

const characters = (
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

const uuids = (state = {}, action) => {

}

const areMine = (state = {}, action) => {

}

const stats = (state = {}, action) => {

}

const names = (state = {}, action) => {

}

const ids = (state = [], action) => {

}

export default characters

// {
//   "data": [
//       {
//           "uuid": "f004a966-d9c8-4c3b-b8e4-25dddb50b4d8",
//           "user_id": 1,
//           "tsats": {
//               "Strength": 10,
//               "Hacking": 5,
//               "Cybersense": 12
//           },
//           "name": "Descartes",
//           "items": [
//               {
//                   "uuid": "19e1ac99-91c0-4140-90e6-f44fc9e4722c",
//                   "stats": {
//                       "Streetcred": 20,
//                       "Lumière": 60
//                   },
//                   "name": "Anneau philosophique",
//                   "id": 15,
//                   "character_id": 2
//               }
//           ],
//           "id": 2
//       }
//   ]
// }