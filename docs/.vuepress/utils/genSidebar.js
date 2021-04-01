function genSidebar(title, children = [''], collapsable = true, sidebarDepth = 2) {
  let arr = new Array();
  arr.push({
    title,
    children,
    collapsable,
    sidebarDepth
  })
  return arr;
}

module.exports = genSidebar;