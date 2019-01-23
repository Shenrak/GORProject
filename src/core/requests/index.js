import { transform } from "../../utils/http-res-handler"

const $myFetch = (path, options = {}) => {
  // const route = "http://172.30.37.172:4000/api" + path
  const route = "http://localhost:4000/api" + path
  return fetch(route, options)
}

export const $signIn = form => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  return $myFetch("/users/sign_in", {
    headers: myHeaders,
    body: JSON.stringify(form),
    method: "POST"
  }).then(res => transform(res, "json"))
}

export const $fetchRooms = token => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("Authorization", "Bearer " + token)
  return $myFetch("/rooms", {
    headers: myHeaders
  }).then(res => transform(res, "json"))
}

// const myHeaders = new Headers()
// myHeaders.append("Authorization", "Bearer " + token)
