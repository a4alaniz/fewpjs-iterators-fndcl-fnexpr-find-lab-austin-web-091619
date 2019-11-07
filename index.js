

function superbowlWin(array) {
  let result = array.find(years =>  years.result === "W") 
  return !!result ? result.year : undefined
}
