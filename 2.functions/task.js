// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  max = arr[0];
  min = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  avg = sum / arr.length;
  return { min: min, max: max, avg: +avg.toFixed(2) };
}

// Задание 2
function worker(arr) {
  let result = arr.reduce((a, b) => a + b); 
    return result;
}
  
function makeWork(arrOfArr, worker) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = worker(arrOfArr[i])
    if (result > max) {
      max = result;
    }
  }
    return max;
}

// Задание 3
function worker2(arr) {
  let arrParams = getArrayParams(arr);
  return Math.abs(arrParams.max - arrParams.min);
}