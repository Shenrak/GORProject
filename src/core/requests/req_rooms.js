import { transform } from "../../utils/http-res-handler"
import { $myFetch } from "."

export const $fetchRooms = token => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("Authorization", "Bearer " + token)
  return $myFetch("/rooms", {
    headers: myHeaders
  }).then(res => transform(res, "json"))
}

export const $fetchCurrentRoom = token => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("Authorization", "Bearer " + token)
  return $myFetch("/rooms", {
    headers: myHeaders
  }).then(res => transform(res, "json"))
}