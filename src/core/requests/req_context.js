import { transform } from "../../utils/http-res-handler"
import { $myFetch } from "."

export const $signIn = form => {
  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  return $myFetch("/users/sign_in", {
    headers: myHeaders,
    body: JSON.stringify(form),
    method: "POST"
  }).then(res => transform(res, "json"))
}