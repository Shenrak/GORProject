import { normalize } from "normalizr"
import * as schemas from "../schemas"

import { $signIn } from "../requests"
import { ActionTypes } from "../actions/act_types"
import { startLoading, stopLoading } from "./act_loading"

export * from "./act_loading"
export * from "./act_tree"
export * from "./act_types"

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
          type: ActionTypes.CONNECT,
          token: result.token,
          login: result.data.login
        })
        dispatch(
          saveCharacters(normalize(result.data.characters, schemas.characters))
        )
      }
    })
    .finally(dispatch(stopLoading()))
}

export const saveCharacters = characters => ({
  type: ActionTypes.ADD_CHARACTERS,
  characters
})

export const register = (text, owner) => ({
  type: "ADD_MESSAGE",
  id: nextMessageId++,
  text,
  owner
})
