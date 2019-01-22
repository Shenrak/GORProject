import { normalize } from "normalizr"
import * as schemas from "../schemas"

import { $signIn, $getRooms } from "../requests"
import * as actionTypes from "./act_types"
import { startLoading, stopLoading } from "./act_loading"

let nextMessageId = 0

export const addMessage = (text, owner) => ({
  type: "ADD_MESSAGE",
  id: nextMessageId++,
  text,
  owner
})

export const login = form => dispatch => {
  dispatch(startLoading())
  $signIn(form)
    .then(result => {
      if (result) {
        dispatch({
          type: actionTypes.CONNECT,
          token: result.token,
          login: result.data.login
        })
        dispatch(saveCharacters(normalize(result.data.characters, schemas.characters)))
      }
    })
    .finally(dispatch(stopLoading()))
}

export const getRooms = token => dispatch => {
  dispatch(startLoading())
  $getRooms(token)
    .then(result => {
      if (result) {
        dispatch(saveRooms(result.data))
      }
    })
    .finally(dispatch(stopLoading()))
}

export const saveCharacters = characters => ({
  type: actionTypes.ADD_CHARACTERS,
  characters
})

export const saveRooms = rooms => ({
  type: actionTypes.FETCH_ROOMS,
  rooms
})

export const register = (text, owner) => ({
  type: "ADD_MESSAGE",
  id: nextMessageId++,
  text,
  owner
})
