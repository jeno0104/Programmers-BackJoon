let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = input[1].split("");
let sum = 0;

for(let i = 0; i < arr.length; i++){
  sum += Number(arr[i]);
}

console.log(sum)