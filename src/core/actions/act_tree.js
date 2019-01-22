import { ActionTypes } from ".."
import { ITreeNode } from "../../../utils/tree/interfaces"

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
