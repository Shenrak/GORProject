import { $signIn } from "../requests"
import * as actionTypes from "./types"
import { startLoading, stopLoading } from "./loading"

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
        dispatch(saveCharacters(result.data.characters))
      }
    })
    .finally(dispatch(stopLoading()))
}

export const saveCharacters = characters => ({
  type: actionTypes.ADD_CHARACTERS,
  characters
})

export const register = (text, owner) => ({
  type: "ADD_MESSAGE",
  id: nextMessageId++,
  text,
  owner
})
