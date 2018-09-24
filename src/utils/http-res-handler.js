import { toastr } from "react-redux-toastr"
import vocabulary from "./localization"

export const handleResponse = (response) => {
  switch (response.status) {
    case 200:
      // toastr.success(
      //   vocabulary.toastrLabels.header200,
      //   vocabulary.toastrLabels.message200
      // )
      break
    case 201:
      toastr.success(
        vocabulary.toastrLabels.header201,
        vocabulary.toastrLabels.message201
      )
      break
    case 400:
      toastr.error(
        vocabulary.toastrLabels.header400,
        vocabulary.toastrLabels.message400
      )
      break
    case 401:
      toastr.error(
        vocabulary.toastrLabels.header401,
        vocabulary.toastrLabels.message401,
        {
          showCloseButton: false,
          // onHideComplete: () => authentication.signOut(),
          // onToastrClick: () => authentication.signOut()
        }
      )
      break
    // case 403:
    //   toastr.error(
    //     vocabulary.toastrLabels.header403,
    //     vocabulary.toastrLabels.message403
    //   )
    //   break
    // case 404:
    //   toastr.error(
    //     vocabulary.toastrLabels.header404,
    //     vocabulary.toastrLabels.message404
    //   )
    //   break
    // case 500:
    //   toastr.error(
    //     vocabulary.toastrLabels.header500,
    //     vocabulary.toastrLabels.message500
    //   )
    //   break
    default:
      response.text().then((text) => {
        toastr.error(text, "")
      })
  }
}

export const transform = (res, type) => {
  handleResponse(res)

  if (res.status >= 300) {
    return false
  }

  switch (type) {
    case "json":
      return res.json()
    case "text":
      return res.text()
    case "blob":
      return res.blob()
    default:
      return "No transform type provided"
  }
}