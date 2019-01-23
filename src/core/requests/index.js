export * from "./req_context"
export * from "./req_rooms"

const $myFetch = (path, options = {}) => {
  // const route = "http://172.30.37.172:4000/api" + path
  const route = "http://localhost:4000/api" + path
  return fetch(route, options)
}


// const myHeaders = new Headers()
// myHeaders.append("Authorization", "Bearer " + token)
