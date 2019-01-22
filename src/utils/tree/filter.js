
// Helper functions for filtering
export const defaultMatcher = (filterText, node) => {
  const nodeName = node.name.toLowerCase()
  const filter = filterText.toLowerCase()
  return nodeName.split(" ").some(el => el.startsWith(filter))
}

export const nodeExists = (node, filter, matcher = defaultMatcher) => {
  return (
    matcher(filter, node) ||
    (node.children !== undefined &&
      !!node.children.find(child => nodeExists(child, filter, matcher)))
  )
}

export const filterTree = (node, filter, matcher = defaultMatcher) => {
  // If im an exact match then all my children get to stay
  if (matcher(filter, node) || !node.children) {
    return node
  }
  // If not then only keep the ones that match or have matching descendants
  const filtered = node.children
    .filter(child => nodeExists(child, filter, matcher))
    .map(child => filterTree(child, filter, matcher))
  return { ...node, children: filtered }
}

export const expandFilteredNodes = (node, filter, matcher = defaultMatcher) => {
  let children = node.children
  if (!children || children.length === 0) {
    return Object.assign({}, node, { toggled: false })
  }
  const childrenWithMatches =
    node.children === undefined
      ? []
      : node.children.filter(child => nodeExists(child, filter, matcher))
  const shouldExpand = childrenWithMatches.length > 0
  // If im going to expand, go through all the matches and see if thier children need to expand
  if (shouldExpand) {
    children = childrenWithMatches.map(child => {
      return expandFilteredNodes(child, filter, matcher)
    })
  }
  return {
    ...node,
    children,
    toggled: shouldExpand
  }
}

// WEBPACK FOOTER //
// ./src/utils/tree/filter.ts
