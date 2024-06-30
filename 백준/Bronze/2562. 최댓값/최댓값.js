let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let index = 0;
let max = 0;

for(let i = 0; i < 9; i++){
  if(max < Number(input[i])){
    max = Number(input[i]);
    index = i;
  }
}

console.log(max);
console.log(index + 1);