let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let n = Number(input[0]);


let curr = 0;
let sum = 0;

while(sum <= n){
  curr += 1;
  sum += curr;
}

console.log(curr - 1)