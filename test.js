/*

*/

let target = 'ballendmill' // 0
let startIndex = 2
function toolchanger(tools, startIndex, target) {
  let mem = startIndex
  let rightMoves = 0
  let leftMoves = 0

  while (tools[startIndex] !== target) {
    startIndex += 1
    rightMoves += 1
    if (startIndex === tools.length) {
      startIndex = 0
    }
  }

  startIndex = mem
  while (tools[startIndex] !== target) {
    startIndex -= 1
    leftMoves += 1
    if (startIndex === -1) {
      startIndex = tools.length -1
    }
  }
  return Math.min(leftMoves, rightMoves)
}

console.log(toolchanger(['ballendmill', 'slotdrill', 'keywaycutter', 'slotdrill', 'facemill'], startIndex, target)); // 2

// no response on stdout