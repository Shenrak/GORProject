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
  return $myFetch("/rooms/current", {
    headers: myHeaders
  }).then(res => transform(res, "json"))
}

export const $joinRoom = (token, roomId) => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("Authorization", "Bearer " + token)
  return $myFetch("/rooms/join", {
    headers: myHeaders,
    method: "POST",
    body: JSON.stringify({ room_id: roomId })
  }).then(res => transform(res, "json"))
}
