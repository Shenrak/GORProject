import { transform } from "../../utils/http-res-handler"

const $myFetch = (path, options = {}) => {
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

// const myHeaders = new Headers()
// myHeaders.append("Authorization", "Bearer " + token)
