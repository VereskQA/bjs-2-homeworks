function compareArrays(firstArr, secondArr) {
  return firstArr.length === secondArr.length && firstArr.every(function (value, index) {
    return value === secondArr[index]
  })
}

function advancedFilter(arr) {
  return arr.filter(function (number) {
    return number > 0
  }).filter(n => !(n % 3)).map(function (num) {
    return num * 10
  });
}
