'use strict'

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c; 
  let x1 = 0; 
  let x2 = 0; 
  let arr = []; 
  if (d == 0) {
    x1 = (-b + Math.sqrt(d)) / 2 * a; 
    arr = [x1]; 
  }
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / 2 * a; 
    x2 = (-b - Math.sqrt(d)) / 2 * a; 
    arr = [x1, x2]; 
  }
  if (d < 0) {
    arr = []; 
  }
  return arr; 
}
