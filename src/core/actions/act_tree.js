import { ActionTypes } from "."
import { startLoading, stopLoading } from "./act_loading"
import { data } from "../../utils/tree"
import { $fetchRooms } from "../requests"

export const getRoomsTree = token => dispatch => {
  dispatch(startLoading())
  $fetchRooms(token)
    .then(result => {
      if (result) {
        dispatch({
          type: ActionTypes.FETCH_ROOMS,
          rooms: data(result.data)
        })
      }
    })
    .finally(dispatch(stopLoading()))
}

export const loadTreeData = (data, treeName) => ({
  data,
  treeName,
  type: ActionTypes.LOAD_TREE_DATA
})

export const toogleNode = (node, toogled, treeName) => ({
  node,
  toogled,
  treeName,
  type: ActionTypes.TOOGLE_TREE_NODE
})

export const setFilteredData = (data, filter = "", treeName) => ({
  data,
  filter,
  treeName,
  type: ActionTypes.SET_FILTERED_DATA
})

export const loadRawTreeData = (rawData, treeName) => ({
  rawData,
  treeName,
  type: ActionTypes.LOAD_RAW_TREE_DATA
})

// WEBPACK FOOTER //
// ./src/core/actions/product-form/tree.ts
