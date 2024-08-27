let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = new Set();

for(let i = 0; i < 10; i++){
  let result = Number(input[i]) % 42;
  arr.add(result);
}

console.log(arr.size);