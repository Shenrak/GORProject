export * from "./filter"

const queryTreeSort = datas => {
  let ri = []
  const indexById = {}
  const childsById = {}
  const sortedDatas = []

  datas.sort((a, b) => a.name.localeCompare(b.name)).forEach((element, i) => {
    indexById[element.id] = i
    if (childsById[element.father_id] == null) {
      childsById[element.father_id] = []
    }
    childsById[element.father_id].push(element.id)
  })

  // this loop is only usefull for the root node. it as been replaced by "if(element.father === "NULL")" on the loop before this one
  datas.forEach(element => {
    if (indexById[element.father_id] == null) {
      ri.push(element.id)
    }
  })

  while (ri.length) {
    const thisid = ri.splice(0, 1)[0]
    sortedDatas.push(datas[indexById[thisid]])
    if (childsById[thisid] != null) {
      // prepend childs ID before next id, so that childs are between this node and the next one
      ri = childsById[thisid].concat(ri)
    }
  }
  return sortedDatas
}

const makeTree = datas => {
  const temp = {}
  const tree = []

  datas.forEach(jsonElement => {
    temp[jsonElement.id] = jsonElement
    const father = temp[jsonElement.father_id]

    if (father != null) {
      const parentPath = father.path === undefined ? "" : father.path
      temp[jsonElement.id].path =
        parentPath +
        (parentPath !== "" ? " / " : "") +
        temp[jsonElement.id].name // better get it from sql
      if (father.children === undefined) {
        father.children = []
      }
      father.children.push(jsonElement)
    } else {
      jsonElement.path = ""
      tree.push(jsonElement)
    }
  })

  return tree
}

const result = rawDataa => {
  if (rawDataa.length === 0) {
    return [{ id: 0, name: "NO DATA FOUND" }]
  }
  const sortedData = queryTreeSort(rawDataa)
  const tree = makeTree(sortedData)
  return tree
}

export const data = _rawData => result(_rawData)
